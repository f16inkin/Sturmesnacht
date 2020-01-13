<template>
    <div class="container-fluid">
        <div class="row" style="padding: 10px">
            <div class="module-wrapper">
                <div id="patient-card-menu"><Menu @editCard="editCard"></Menu></div>
                <div id="patient-card-body">
                    <div class="row">
                        <div id="personal-data-section" class="col-3">
                            <PersonalData
                                    :card-number="cardNumber"
                                    :surname="surname"
                                    :first-name="firstName"
                                    :second-name="secondName"
                                    :gender-id="genderId"
                                    :date-birth="dateBirth"
                                    :telephone="telephone"
                                    :email="email"
                                    :disabled-input="disabledInput"
                            ></PersonalData>
                        </div>
                        <div id="documents-section" class="col-3">
                            <Documents
                                    :insurance-certificate="insuranceCertificate"
                                    :policy-number="policyNumber"
                                    :insurance-company-id="insuranceCompanyId"
                                    :insurance-company="insuranceCompany"
                                    :passport="passport"
                                    :birth-certificate="birthCertificate"
                                    :fms-department="fmsDepartment"
                                    :registry-office="registryOffice"
                                    :disabled-input="disabledInput"
                            ></Documents>
                        </div>
                        <div id="addresses-section" class="col-3">
                            <Addresses
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
                            ></Addresses>
                        </div>
                        <div id="additionally-section" class="col-3">
                            <Additionally
                                :workplace="workplace"
                                :profession="profession"
                                :notation-text="notationText"
                                :disabled-input="disabledInput"
                            ></Additionally>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import Menu from "../components/PatientCard/Menu";
    import PersonalData from "../components/PatientCard/PersonalData";
    import Documents from "../components/PatientCard/Documents";
    import Addresses from "../components/PatientCard/Addresses";
    import Additionally from "../components/PatientCard/Additionally";
    const apiUrl = 'http://192.168.0.10';
    export default {
        name: "PatientCard",
        components: {Additionally, Menu, PersonalData, Documents, Addresses},
        methods: {
            getContacts: function(){
                return axios.get(`${apiUrl}/app/patient-card/get/1`)
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
                this.surname = object.surname;
                this.disabledInput = !this.disabledInput;
            }
        },
        data() {
            return {
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
                disabledInput: true
            }
        },
        created: function(){
            //document.title = 'Карта пациента';
        },
        mounted: function () {
            this.getContacts().then(data => {
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