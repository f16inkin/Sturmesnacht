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
    const apiUrl = 'http://192.168.0.10';
    import { bus } from "../../main";
    import axios from 'axios';
    import CardPersonalData from "./CardPersonalData"
    import CardDocuments from "./CardDocuments";
    import CardAddresses from "./CardAddresses";
    import CardAdditionally from "./CardAdditionally";
    export default {
        name: "Card",
        components: {CardPersonalData, CardDocuments, CardAddresses, CardAdditionally},
        methods: {
            getCard: function(){
                return axios.get(`${apiUrl}/app/patient-card/get/${this.cardId}`)
                    .then(function (response) {
                        return response.data.card_data;

                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            editCard: function(object){
                /**
                 * Сначала проверка, на то не заблокированна ли карта?
                 * Если нет, то можно ставить disabledInput в false
                 * Тогл тут не будет к месту
                 */
                console.log(object.name);
                console.log(object.surname);
                console.log(object.counter +=1);
                this.surname = object.surname;
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
            let cardId = this.$route.params.id;
            this.cardId = cardId;
        },
        beforeDestroy: function () {
            /**
             * Зачистка слушателей, чтобы не сохранять состояние
             */
            bus.$off('editCard', this.editCard);
            bus.$off('saveCard', this.saveCard);
        },
        mounted: function () {
            this.getCard().then(data => {
                console.log(data);
                this.cardNumber = data.cardNumber;
                this.surname = data.surname;
                this.firstName = data.firstName;
                this.secondName = data.secondName;
                this.genderId = data.genderId;
                this.dateBirth = data.dateBirth;
                this.telephone = data.telephone;
                this.email = data.email;
                this.policyNumber = data.policyNumber;
                this.insuranceCertificate = data.insuranceCertificate;
                this.insuranceCompanyId = data.insuranceCompanyId;
                this.insuranceCompany = data.insuranceCompany;
                this.passport = data.passportSerial + ' ' + data.passportNumber;
                this.fmsDepartment = data.fmsDepartment;
                this.birthCertificate = data.birthCertificateSerial + ' ' + data.birthCertificateNumber;
                this.registryOffice = data.registryOffice;
                this.regionName = data.region;
                this.regionId = data.regionId;
                this.districtId = data.districtId;
                this.districtName = data.district;
                this.localityId = data.localityId;
                this.localityName = data.locality;
                this.streetId = data.streetId;
                this.streetName = data.street;
                this.houseNumber = data.houseNumber;
                this.apartmentNumber = data.apartment;
                this.workplace = data.workPlace;
                this.profession = data.profession;
                this.notationText = data.notation;
            });

        }
    }
</script>

<style scoped>

</style>