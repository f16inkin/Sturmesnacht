<template>
    <div class="input-group mb-2">
        <div class="input-group-prepend">
            <div class="input-group-text"><font-awesome-icon  class="fa-for-menu" :icon="['fas', 'search']"/> </div>
        </div>
        <input type="text" class="form-control" name="card-search" placeholder="Поиск" @keyup.enter="getCards" @keyup.backspace="getCard" v-model="search.searchString">
        <div class="input-group-append">
            <div  class="input-group-text"><b>Найдено:</b></div>
        </div>
        <div class="input-group-append">
            <div class="input-group-text"><span id="patient-card-found-records" class="badge badge-dark">{{cardsCount}}</span></div>
        </div>
    </div>
</template>

<script>
    const apiUrl = 'http://192.168.0.10';
    import axios from 'axios';
    import { bus } from "../../main";
    export default {
        name: "Search",
        methods: {
            getCards: function () {
                if (this.search.searchString.length > 0) {
                    return axios.post(`${apiUrl}/app/patient-card/search-cards`, JSON.stringify(this.search))
                        .then(function (response) {
                            return response.data.cards;
                        })
                        .then(data => {
                            this.cardsCount = data.length;
                            bus.$emit('getCards', data);
                            //эмит комманда для меню
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                }
            },
            getCard: function () {
                if (this.search.searchString.length === 0){
                    this.cardsCount = 0;
                    bus.$emit('getCard');
                }
            }
        },
        data() {
            return {
                cardsCount: 0,
                search: {
                    searchString : '',
                    selectedPage : 1
                },
            }
        }
    }
</script>

<style scoped>

</style>