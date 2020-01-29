const apiUrl = 'http://192.168.0.10';

import axios from 'axios';

export default {
    namespaced: true,
    state:{
        card: {
            /*cardId: '',
            cardNumber: '',
            surname: '',
            firstName: '',
            secondName: '',
            genderId: '',
            dateBirth: '',
            telephone: '',
            email: '',
            insuranceCertificate: '',
            policyNumber: '',
            insuranceCompanyId: '',
            insuranceCompany: '',
            passport: '',
            fmsDepartment: '',
            birthCertificate: '',
            registryOffice: '',
            regionName: '',
            regionId: '',
            districtName: '',
            districtId: '',
            localityId: '',
            localityName: '',
            streetId: '',
            streetName: '',
            houseNumber: '',
            apartmentNumber: '',
            workplace: '',
            profession: '',
            notationText: ''*/
        },
        cards: {},
        cardsCount: 0,
        currentView: 'Card'
    },
    actions:{
        getCardAction: function(context){
            return axios.get(`${apiUrl}/app/patient-card/get/1`)
                .then(function (response) {
                    return response.data.card_data;
                }).then(data => {
                    context.commit('getCardMutation', data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        getCardsAction: function (context, search) {
            return axios.post(`${apiUrl}/app/patient-card/search-cards`, JSON.stringify(search))
                .then(function (response) {
                    return response.data.cards;
                })
                .then(data => {
                    context.commit('getCardsMutation', data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },
    mutations:{
        getCardMutation: function (state, card){
            state.card = card;
            state.card.passport = card.passportSerial + ' ' + card.passportNumber;
            //Пока так.
            state.currentView = 'Card';
        },
        getCardsMutation: function (state, cards) {
            console.log(cards);
            state.cards = cards;
            state.currentView = 'Cards';
        }
    },
    getters:{
        cardsCountGetter(state){
            return state.cards.length;
        },
        cardsGetter(state){
            return state.cards;
        }
    },
}