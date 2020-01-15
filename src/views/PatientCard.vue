<template>
    <div class="container-fluid">
        <div class="row" style="padding: 10px">
            <div class="module-wrapper">
                <div id="patient-card-menu"><Menu @searchCards="searchCards"></Menu></div>
                <div id="patient-card-body"><component :is="currentView"></component></div>
            </div>
        </div>
    </div>
</template>

<script>
    import Menu from "../components/PatientCard/Menu";
    import Card from "../components/PatientCard/Card";
    import Search from "../components/PatientCard/Search";
    export default {
        name: "PatientCard",
        components: {Menu, Card, Search},
        methods: {
          searchCards: function () {
              this.currentView = 'Search';
          }
        },
        /*methods: {
            editCard: function(object){
                this.disabledInput = !this.disabledInput;
            },
            saveCard: function(){
                this.disabledInput = !this.disabledInput;
            }
        },*/
        data() {
            return {
                /**
                 * Касаемо смены видов
                 */
                currentView: 'Card',
            }
        }
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
    .patient-card-information-section{
        border: solid 1px;
        background-color: white;
        border-radius: 5px;
        border-color: #dce1e5;
    }
    .box-shadow--2dp {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12)
    }
    .patient-card-information-section-header{
        background-color: #37474F;
        color: white;
        font-size: 16px;
        font-weight: bold;
        padding: 5px;
    }
    .patient-card-information-section-body{
        padding: 5px;
        color: #37474f;
        font-weight: bold;
    }
    .patient-card-status{
        border: solid 1px;
        padding: 3px;
        text-align: center;
        cursor: not-allowed;
    }
</style>