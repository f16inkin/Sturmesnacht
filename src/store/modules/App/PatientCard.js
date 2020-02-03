const apiUrl = 'http://192.168.0.10';

import axios from 'axios';

export default {
    namespaced: true,
    state:{
        card: {},
        cards: [],
        currentView: 'Card',
        isAllowButtons: true,
        dispositions: []
    },
    actions:{
        getCardAction: function({commit}, id){
            return axios.get(`${apiUrl}/app/patient-card/get/${id}`)
                .then(function (response) {
                    return response.data.card_data;
                }).then(data => {
                    commit('GET_CARD', data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        getCardsAction: function ({commit}, search) {
            return axios.post(`${apiUrl}/app/patient-card/search-cards`, JSON.stringify(search))
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

        getDispositionsAction: function ({commit}, payload) {
            return axios.get(
                `${apiUrl}/app/patient-card/${payload.searchField}`, {params: {searchString: payload.searchString, searchParams: payload.searchParams}})
                .then(function (response) {
                    console.log(response.data);
                    return response.data;
                }).then(data => {
                    commit('GET_DISPOSITIONS', data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        setDispositionAction: function ({commit}, payload) {
            commit('SET_DISPOSITION', payload);
        },
        clearDispositionsAction: function ({commit}, payload) {
            commit('CLEAR_DISPOSITIONS', payload);
        }
    },
    mutations:{
        GET_CARD: function (state, card){
            console.log(card)
            state.card = card;
            state.card.passport = card.passportSerial + ' ' + card.passportNumber;
            //Пока так.
            state.currentView = 'Card';
            state.cards = [];
            state.isAllowButtons = true;
        },
        GET_CARDS: function (state, cards) {
            state.cards = cards;
            state.currentView = 'Cards';
            state.isAllowButtons = false;
        },
        GET_DISPOSITIONS: function (state, dispositions) {
            state.dispositions = dispositions;
        },
        SET_DISPOSITION: function (state, disposition) {
            state.card[disposition.idFieldName] = disposition.id;
            state.card[disposition.valueFieldName] = disposition.value;
            state.dispositions = [];
        },
        CLEAR_DISPOSITIONS: function (state, dispositions) {
            dispositions.forEach(function (item) {
                state.card[item]= '';
            })
        }
    },
    getters:{
        cardsCountGetter(state){
            return state.cards.length || 0;
        },
        cardsGetter(state){
            return state.cards;
        }
    },
}