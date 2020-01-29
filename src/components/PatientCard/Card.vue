<template>
    <div class="row">
        <div id="personal-data-section" class="col-3">
            <CardPersonalData
                    :card-number="this.$store.state.patientCard.card.cardNumber"
                    :surname="this.$store.state.patientCard.card.surname"
                    :first-name="this.$store.state.patientCard.card.firstName"
                    :second-name="this.$store.state.patientCard.card.secondName"
                    :gender-id="this.$store.state.patientCard.card.genderId"
                    :date-birth="this.$store.state.patientCard.card.dateBirth"
                    :telephone="this.$store.state.patientCard.card.telephone"
                    :email="this.$store.state.patientCard.card.email"
                    :disabled-input="disabledInput"
            ></CardPersonalData>
        </div>
        <div id="documents-section" class="col-3">
            <CardDocuments
                    :insurance-certificate="this.$store.state.patientCard.card.insuranceCertificate"
                    :policy-number="this.$store.state.patientCard.card.policyNumber"
                    :insurance-company-id="this.$store.state.patientCard.card.insuranceCompanyId"
                    :insurance-company="this.$store.state.patientCard.card.insuranceCompany"
                    :passport="this.$store.state.patientCard.card.passport"
                    :birth-certificate="this.$store.state.patientCard.card.birthCertificate"
                    :fms-department="this.$store.state.patientCard.card.fmsDepartment"
                    :registry-office="this.$store.state.patientCard.card.registryOffice"
                    :disabled-input="disabledInput"
            ></CardDocuments>
        </div>
        <div id="addresses-section" class="col-3">
            <CardAddresses
                    :region-name="this.$store.state.patientCard.card.region"
                    :region-id="this.$store.state.patientCard.card.regionId"
                    :district-id="this.$store.state.patientCard.card.districtId"
                    :district-name="this.$store.state.patientCard.card.district"
                    :locality-id="this.$store.state.patientCard.card.localityId"
                    :locality-name="this.$store.state.patientCard.card.locality"
                    :street-id="this.$store.state.patientCard.card.streetId"
                    :street-name="this.$store.state.patientCard.card.street"
                    :house-number="this.$store.state.patientCard.card.houseNumber"
                    :apartment-number="this.$store.state.patientCard.card.apartment"
                    :disabled-input="disabledInput"
            ></CardAddresses>
        </div>
        <div id="additionally-section" class="col-3">
            <CardAdditionally
                    :workplace="this.$store.state.patientCard.card.workplace"
                    :profession="this.$store.state.patientCard.card.profession"
                    :notation-text="this.$store.state.patientCard.card.notation"
                    :disabled-input="disabledInput"
            ></CardAdditionally>
        </div>
    </div>
</template>

<script>
    import { bus } from "../../main";
    import CardPersonalData from "./CardPersonalData"
    import CardDocuments from "./CardDocuments";
    import CardAddresses from "./CardAddresses";
    import CardAdditionally from "./CardAdditionally";
    export default {
        name: "Card",
        components: {CardPersonalData, CardDocuments, CardAddresses, CardAdditionally},
        methods: {
            editCard: function(){
                this.disabledInput = !this.disabledInput;
            },
            saveCard: function(){
                this.disabledInput = !this.disabledInput;
            }
        },
        data() {
            return {
                disabledInput: true,
            }
        },
        created: function(){
            bus.$on('editCard', this.editCard);
            bus.$on('saveCard', this.saveCard);
        },
        beforeDestroy: function () {
            /**
             * Зачистка слушателей, чтобы не сохранять состояние
             */
            bus.$off('editCard', this.editCard);
            bus.$off('saveCard', this.saveCard);
        },
        mounted: function(){
            this.$store.dispatch('patientCard/getCardAction');
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
</style>