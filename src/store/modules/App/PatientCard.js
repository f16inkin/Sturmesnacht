const apiUrl = 'http://192.168.0.10';

import axios from 'axios';

export default {
    namespaced: true,

    state:{
        card: {},
        cards: [],
        currentView: 'Card',
        isAllowButtons: true,
        dispositions: {
            regions: [],
            districts: [],
            localities: [],
            streets: []
        },
        insuranceCompanies: []
    },

    actions:{
        /**
         * Получаю все данные карты
         * @param commit
         * @param id
         * @returns {Promise<AxiosResponse<T> | never>}
         */
        getCardAction: function({commit}, id){
            return axios.get(`${apiUrl}/app/patient-cards/${id}`)
                .then(function (response) {
                    return response.data.card_data;
                }).then(data => {
                    commit('GET_CARD', data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        /**
         * Получаю карты по параметрам поиска
         * @param commit
         * @param search
         * @returns {Promise<AxiosResponse<T> | never>}
         */
        getCardsAction: function ({commit}, search) {
            //return axios.post(`${apiUrl}/app/patient-card/search-cards`, JSON.stringify(search))
            return axios.get(`${apiUrl}/app/patient-cards`, {params: {searchString: search.searchString, selectedPage: search.selectedPage}})
                .then(function (response) {
                    return response.data.cards;
                })
                .then(data => {
                    commit('GET_CARDS', data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        /**
         * Получаю регион, район, населенный пункт, улицу
         * @param commit
         * @param payload
         * @returns {Promise<AxiosResponse<T> | never>}
         */
        getDispositionsAction: function ({commit}, payload) {
            return axios.get(
                `${apiUrl}/app/patient-card/${payload.searchField}`, {params: {searchString: payload.searchString, searchParams: payload.searchParams}})
                .then(function (response) {
                    return response.data;
                }).then(dispositions => {
                    commit('GET_DISPOSITIONS', {dispositions: dispositions, disposition: payload.disposition})
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        /**
         * Поиск страховой компании
         * @param commit
         * @param payload
         * @returns {Promise<AxiosResponse<T> | never>}
         */
        getInsuranceCompaniesAction: function ({commit}, payload) {
            return axios.get(
                `${apiUrl}/app/patient-card/insurance-companies`, {params: {searchString: payload.searchString}})
                .then(function (response) {
                    return response.data;
                }).then(insuranceCompanies => {
                    commit('GET_INSURANCE_COMPANIES', insuranceCompanies)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        /**
         * Выбрать регион, район, населенный пункт, улицу из списска выданных поиском
         * @param commit
         * @param payload
         */
        setDispositionAction: function ({commit}, payload) {
            commit('SET_DISPOSITION', payload);
        },
        /**
         * Выбрать страховую компанию из списка выданных поиском
         * @param commit
         * @param payload
         */
        setInsuranceCompanyAction: function({commit}, payload){
            commit('SET_INSURANCE_COMPANY', payload);
        },
        /**
         * Используется для зачистки диспозиций state.card, когда производится поиск вышестоящей диспозиции
         * @param commit
         * @param payload
         */
        clearDispositionsAction: function ({commit}, payload) {
            commit('CLEAR_DISPOSITIONS', payload);
        },
        /**
         * Убрать табличку с сообщением о "ничего не найдено"
         * @param commit
         */
        clearNothingAction: function ({commit}) {
            commit('CLEAR_NOTHING');
        },

        updateCardAction: function ({commit, state}, id) {
            return axios.put(`${apiUrl}/app/patient-cards/${id}`, JSON.stringify(state.card))
                .then(function (response) {
                    return response.data.card_data;
                })//.then(data => {
                    //commit('GET_CARD', data)
                //})
                .catch(function (error) {
                    console.log(error);
                });
        }
    },

    mutations:{
        /**
         * Поиск карты.
         * @param state
         * @param card
         * @constructor
         */
        GET_CARD: function (state, card){
            state.card = card;
            //state.card.fullName = card;
            state.card.passport = card.passportSerial + ' ' + card.passportNumber;
            state.card.birthCertificate = card.birthCertificateSerial + ' ' + card.birthCertificateNumber;
            //Пока так.
            state.currentView = 'Card';
            state.cards = [];
            state.isAllowButtons = true;
        },
        /**
         * Поиск карт.
         * @param state
         * @param cards
         * @constructor
         */
        GET_CARDS: function (state, cards) {
            state.cards = cards;
            state.currentView = 'Cards';
            state.isAllowButtons = false;
        },
        /**
         * Получаю диспозиции: регион, улица, населенный пункт, район.
         * @param state
         * @param payload
         * @constructor
         */
        GET_DISPOSITIONS: function (state, payload) {
            state.dispositions[payload.disposition] = payload.dispositions;
        },
        /**
         * Получаю список страховых компаний
         * @param state
         * @param payload
         * @constructor
         */
        GET_INSURANCE_COMPANIES(state, payload) {
            state.insuranceCompanies = payload;
        },
        /**
         * Устанавливаю диспозиции: регион, район, населенный пункт, улица.
         * @param state
         * @param disposition
         * @constructor
         */
        SET_DISPOSITION: function (state, disposition) {
            state.card[disposition.idFieldName] = disposition.id;
            state.card[disposition.valueFieldName] = disposition.value;
            state.dispositions[disposition.dispositionSection] = [];
        },
        /**
         * Устанавливаю значение выбранной страховой компании
         * @param state
         * @param insuranceCompany
         * @constructor
         */
        SET_INSURANCE_COMPANY: function(state, insuranceCompany){
            state.card.insuranceCompanyId = insuranceCompany.id;
            state.card.insuranceCompany = insuranceCompany.value;
            state.insuranceCompanies = [];
        },
        /**
         * Очищает поля для связанных диспозиций.
         * Например: если искать регион, функция очистит поля для района, населенного пункта и улицу.
         * @param state
         * @param dispositions
         * @constructor
         */
        CLEAR_DISPOSITIONS: function (state, dispositions) {
            dispositions.forEach(function (item) {
                state.card[item]= '';
            })
        },
        /**
         * Убирает состояние null из объекта состояния, что дает возможность регулировать отображение сообщения Nothing
         * в карте. Когда диспозиции стоят в null, в карте отображается сообщение nothing, но стоит присвоить пустой
         * массив, сообщение сразу исчезает. Так работает v-if во vue.
         * @param state
         * @constructor
         */
        CLEAR_NOTHING: function (state) {
            state.dispositions.regions = [];
            state.dispositions.districts = [];
            state.dispositions.localities = [];
            state.dispositions.streets = [];
            state.insuranceCompanies = [];
        }
    },

    getters:{
        /**
         * Вывод количества карт найденныз для отображения на странице
         * @param state
         * @returns {number}
         */
        cardsCountGetter(state){
            return state.cards.length || 0;
        }
    }
}