<template>
    <div>
        <div id="cards-data-search-section" class="row" style="padding: 10px;">
            <table id="cards-data-table" class="table-striped table-mine full-width box-shadow--2dp">
                <thead>
                <tr>
                    <th style="width: 20%;">ФИО</th>
                    <th style="width: 10%;">Номер карты</th>
                    <th style="width: 15%;">Полис</th>
                    <th style="width: 15%;">Снилс</th>
                    <th style="width: 10%;">Статус</th>
                    <th style="width: 10%;">Прикрепление</th>
                    <th style="width: 20%;">Действия</th>
                </tr>
                </thead>
                <tbody id="cards-data-table-content">
                <cards-table-line v-for="card in cards" :key="card.id" :card="card"></cards-table-line>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    const apiUrl = 'http://192.168.0.10';
    import axios from 'axios';
    import { bus } from "../../main";
    import CardsTableLine from '../../components/PatientCard/CardsTableLine';
    export default {
        name: "Cards",
        props:['searchText'],
        components: {
            CardsTableLine
        },
        methods: {
            getCards: function(){
                return axios.post(`${apiUrl}/app/patient-card/search-cards`, JSON.stringify(this.search))
                    .then(function (response) {
                        return response.data.cards;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            searchCards: function () {
                this.getCards().then(data => {
                    this.cards = data;
                })
            }
        },
        data() {
            return {
                search: {
                    searchString : this.searchText,
                    selectedPage : 1
                },
                cards: [],
            }
        },
        created: function(){
            bus.$on('searchCards', this.searchCards);
        },
        beforeDestroy: function () {
            bus.$off('searchCards', this.searchCards);
        },
        mounted:function () {
            this.searchCards();
        }
    }
</script>

<style>
    .table-mine{
        border-collapse: separate;
        border-spacing: 1px;
        margin-bottom: 5px;
        width: 100%;
    }
    .table-mine thead{
        background-color: #37474F;
        color: white;
        font-size: 12px;
    }
    .table-mine > thead > tr > th,
    .table-mine > tbody > tr > th,
    .table-mine > tfoot > tr > th,
    .table-mine > thead > tr > td,
    .table-mine > tbody > tr > td,
    .table-mine > tfoot > tr > td {
        padding: 8px;
        line-height: 1.42857143;
        text-align: center;
    }
    .table-mine tbody{
        color: #37474F;
        background-color: white;
        font-size: 12px;
    }
</style>