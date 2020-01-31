const apiUrl = 'http://192.168.0.10';

import axios from 'axios';

export default {
    namespaced: true,
    state:{
        card: {},
        cards: [],
        currentView: 'Card',
        isAllowButtons: true
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