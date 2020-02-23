<template>
    <div class="row">
        <div id="personal-data-section" class="col-3">
            <CardPersonalData
                    :surname="card.surname"
                    :first-name="card.firstName"
                    :second-name="card.secondName"
            ></CardPersonalData>
        </div>
        <div id="documents-section" class="col-3">
            <CardDocuments></CardDocuments>
        </div>
        <div id="addresses-section" class="col-3">
            <CardAddresses></CardAddresses>
        </div>
        <div id="additionally-section" class="col-3">
            <CardAdditionally></CardAdditionally>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import CardPersonalData from "./CardPersonalData"
    import CardDocuments from "./CardDocuments";
    import CardAddresses from "./CardAddresses";
    import CardAdditionally from "./CardAdditionally";
    export default {
        name: "Card",
        components: {CardPersonalData, CardDocuments, CardAddresses, CardAdditionally},
        computed: {
            ...mapState('app/patientCard', {
                card: state => state.card
            })
        },
        methods: {
            ...mapActions('app/patientCard', ['getCardAction']),
            loadCard: function(){
                if (this.card.id === undefined){
                    this.getCardAction(this.$router.currentRoute.params['id']);
                }
            },
            editCard: function(){
                this.disabledInput = !this.disabledInput;
            },
            saveCard: function(){
                this.disabledInput = !this.disabledInput;
            }
        },
        created: function(){
            this.loadCard();
        }
    }
</script>

<style>
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
    .patient-card-search-result-line{
        width: 100%;
        padding: 7px;
    }
    .patient-card-search-result-line:hover{
        background-color: #007bff;
        color: white;
        cursor: pointer;
    }
    .search-result-container{
        width: 100%;
        border: solid 1px;
        border-color: #dce1e5;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    .search-result-area {
        width: 100%;
    }
    .red-asterisk{
        color:red;
    }
</style>