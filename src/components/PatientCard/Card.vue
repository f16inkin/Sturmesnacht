<template>
    <div class="row">
        <div id="personal-data-section" class="col-3">
            <CardPersonalData
                    :card-number="cardNumber"
                    :surname="surname"
                    :first-name="firstName"
                    :second-name="secondName"
                    :gender-id="genderId"
                    :date-birth="dateBirth"
                    :telephone="telephone"
                    :email="email"
                    :disabled-input="disabledInput"
            ></CardPersonalData>
        </div>
        <div id="documents-section" class="col-3">
            <CardDocuments
                    :insurance-certificate="insuranceCertificate"
                    :policy-number="policyNumber"
                    :insurance-company-id="insuranceCompanyId"
                    :insurance-company="insuranceCompany"
                    :passport="passport"
                    :birth-certificate="birthCertificate"
                    :fms-department="fmsDepartment"
                    :registry-office="registryOffice"
                    :disabled-input="disabledInput"
            ></CardDocuments>
        </div>
        <div id="addresses-section" class="col-3">
            <CardAddresses
                    :region-name="regionName"
                    :region-id="regionId"
                    :district-id="districtId"
                    :district-name="districtName"
                    :locality-id="localityId"
                    :locality-name="localityName"
                    :street-id="streetId"
                    :street-name="streetName"
                    :house-number="houseNumber"
                    :apartment-number="apartmentNumber"
                    :disabled-input="disabledInput"
            ></CardAddresses>
        </div>
        <div id="additionally-section" class="col-3">
            <CardAdditionally
                    :workplace="workplace"
                    :profession="profession"
                    :notation-text="notationText"
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
                cardId: '',
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
                notationText: '',
                disabledInput: true,
                /**
                 * Касаемо смены видов
                 */
                currentView: ''

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
            this.$store.dispatch('getCardAction');
            console.log(this.$store.state.patientCard.card);
            this.cardNumber = this.$store.state.patientCard.card.cardNumber;
        },
        computed: {
            card(){
                return this.$store.state.card;
            }
        },
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