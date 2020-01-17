<template>
    <div class="container-fluid">
        <div class="row" style="padding: 10px">
            <div class="module-wrapper">
                <div id="patient-card-menu"><Menu></Menu></div>
                <div id="patient-card-body"><component :is="currentView"></component></div>
            </div>
        </div>
    </div>
</template>

<script>
    import { bus } from "../main";
    import Menu from "../components/PatientCard/Menu";
    import Card from "../components/PatientCard/Card";
    import Cards from "../components/PatientCard/Cards";
    export default {
        name: "PatientCard",
        components: {Menu, Card, Cards},
        methods: {
          searchCards: function () {
              this.currentView = 'Cards';
          },
          getCard: function () {
              this.currentView = 'Card';
          }  
        },
        data() {
            return {
                currentView: 'Card',
            }
        },
        created: function () {
            bus.$on('searchCards', this.searchCards);
            bus.$on('getCard', this.getCard);
        },
        beforeDestroy: function () {
            /**
             * Зачистка слушателей, чтобы не сохранять состояние
             */
            bus.$off('searchCards', this.searchCards);
            bus.$off('getCard', this.getCard);
        },
    }
</script>

<style>
    #patient-card-menu{
        height: 50px;
        width: 100%;
        background-color: white;
        margin-bottom: 10px;
        padding: 6px;
        border: solid 1px;
        border-radius: 5px;
        border-color: #dce1e5;
    }
    #patient-card-body{
        width: 100%;
        padding: 10px;
    }
</style>