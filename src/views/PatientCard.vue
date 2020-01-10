<template>
    <div class="container-fluid">
        <div class="row" style="padding: 10px">
            <div class="module-wrapper">
                <div id="patient-card-menu"><Menu></Menu></div>
                <div id="patient-card-body">
                    <div class="row">
                        <div id="personal-data-section" class="col-3">
                            <PersonalData :surname="surname" :first-name="firstName" :second-name="secondName" :date-birth="dateBirth" :telephone="telephone" :email="email"></PersonalData>
                        </div>
                        <div id="documents-section" class="col-3">
                            <Documents :insurance-certificate="insuranceCertificate"></Documents>
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
    const domain = 'http://192.168.0.10';
    export default {
        name: "PatientCard",
        components: {Menu, PersonalData, Documents},
        methods: {
            getContacts: function(){
                return axios.get(domain+'/app/patient-card/get/1')
                    .then(function (response) {
                        return response.data.card_data;

                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },
        data() {
            return {
                surname: '',
                firstName: '',
                secondName: '',
                dateBirth: '',
                telephone: '',
                email: '',
                insuranceCertificate: ''
            }
        },
        created: function(){
            //document.title = 'Карта пациента';
        },
        mounted: function () {
            this.getContacts().then(data => {
                this.surname = data.surname;
                this.firstName = data.firstName;
                this.secondName = data.secondName;
                this.dateBirth = data.dateBirth;
                this.telephone = data.telephone;
                this.email = data.email;
                this.insuranceCertificate = data.insuranceCertificate;
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