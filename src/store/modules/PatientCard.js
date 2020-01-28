const apiUrl = 'http://192.168.0.10';

import axios from 'axios';

export default {
    state:{
        card: {cardNumber: 111},
        cards: [],
        cardsCount: 10,
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
        getCards: function (context, search) {
            return axios.post(`${apiUrl}/app/patient-card/search-cards`, JSON.stringify(search))
                .then(function (response) {
                    return response.data.cards;
                })
                .then(data => {
                    context.commit('getCards', data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
    mutations:{
        getCardMutation: function (state, card){
            state.card = card;
        },
        getCards: function (state, cards) {
            state.cards = cards;
        }
    },
    getters:{
        cardsCountGetter(state){
            return state.cardsCount;
        }
    },
}