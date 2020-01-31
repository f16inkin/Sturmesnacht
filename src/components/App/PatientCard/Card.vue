<template>
    <div class="row">
        <div id="personal-data-section" class="col-3">
            <CardPersonalData
                    :card-number="card.cardNumber"
                    :surname="card.surname"
                    :first-name="card.firstName"
                    :second-name="card.secondName"
                    :gender-id="card.genderId"
                    :date-birth="card.dateBirth"
                    :telephone="card.telephone"
                    :email="card.email"
                    :disabled-input="disabledInput"
            ></CardPersonalData>
        </div>
        <div id="documents-section" class="col-3">
            <CardDocuments
                    :insurance-certificate="card.insuranceCertificate"
                    :policy-number="card.policyNumber"
                    :insurance-company-id="card.insuranceCompanyId"
                    :insurance-company="card.insuranceCompany"
                    :passport="card.passport"
                    :birth-certificate="card.birthCertificate"
                    :fms-department="card.fmsDepartment"
                    :registry-office="card.registryOffice"
                    :disabled-input="disabledInput"
            ></CardDocuments>
        </div>
        <div id="addresses-section" class="col-3">
            <CardAddresses
                    :region-name="card.region"
                    :region-id="card.regionId"
                    :district-id="card.districtId"
                    :district-name="card.district"
                    :locality-id="card.localityId"
                    :locality-name="card.locality"
                    :street-id="card.streetId"
                    :street-name="card.street"
                    :house-number="card.houseNumber"
                    :apartment-number="card.apartment"
                    :disabled-input="disabledInput"
            ></CardAddresses>
        </div>
        <div id="additionally-section" class="col-3">
            <CardAdditionally
                    :workplace="card.workplace"
                    :profession="card.profession"
                    :notation-text="card.notation"
                    :disabled-input="disabledInput"
            ></CardAdditionally>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions} from 'vuex';
    import { bus } from "../../../main";
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
            editCard: function(){
                this.disabledInput = !this.disabledInput;
            },
            saveCard: function(){
                this.disabledInput = !this.disabledInput;
            },
            ...mapActions('app/patientCard', ['getCardAction'])
        },
        data() {
            return {
                disabledInput: true,
            }
        },
        created: function(){
            bus.$on('editCard', this.editCard);
            bus.$on('saveCard', this.saveCard);
            this.getCardAction(this.$router.currentRoute.params['id']);
        },
        beforeDestroy: function () {
            /**
             * Зачистка слушателей, чтобы не сохранять состояние
             */
            bus.$off('editCard', this.editCard);
            bus.$off('saveCard', this.saveCard);
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