<template>
    <div class="patient-card-information-section box-shadow--2dp">
        <div class="patient-card-information-section-header">
            <div class="row">
                <div class="col-6">
                    <font-awesome-icon  class="fa-for-menu" :icon="['fas', 'folder']"/> Документы
                </div>
                <div class="col-6">
                    <section-header-controls @toggleInputs="toggleInputs"></section-header-controls>
                </div>
            </div>
        </div>
        <div class='patient-card-information-section-body'>
            <label for="insurance-certificate">СНИЛС<span class="red-asterisk">*</span>:</label>
            <div class="input-group mb-2">
                <div class="input-group-prepend">
                    <div class="input-group-text"><font-awesome-icon class="fa-for-menu" :icon="['fas', 'id-card']"/></div>
                </div>
                <input type="text" v-mask="'###-###-### ##'" class="form-control" id="insurance-certificate" name="insurance-certificate" placeholder="СНИЛС" v-model="card.insuranceCertificate" :disabled="disabledInput">
            </div>
            <hr>
            <label for="policy-number">Единый номер полиса<span class="red-asterisk">*</span>:</label>
            <div class="input-group mb-2">
                <div class="input-group-prepend">
                    <div class="input-group-text"><font-awesome-icon class="fa-for-menu" :icon="['fas', 'clipboard']"/></div>
                </div>
                <input type="text" v-mask="'####-####-####-####'" class="form-control" id="policy-number" name="policy-number" placeholder="Номер полиса" v-model="card.policyNumber" :disabled="disabledInput">
            </div>
            <label for="insurance-company">Страховая компания:</label>
            <div class="input-group mb-2">
                <input name="insurance-company-id" v-model="card.insuranceCompanyId" hidden>
                <div class="input-group-prepend">
                    <div class="input-group-text"><font-awesome-icon class="fa-for-menu" :icon="['fas', 'clipboard']"/></div>
                </div>
                <input type="text" class="form-control" id="insurance-company" name="insurance-company" placeholder="Страховая компания" @keyup="getInsuranceCompanies" v-model="card.insuranceCompany" :disabled="disabledInput">
                <div class="search-result-area"  v-if="insuranceCompanies">
                    <div class="search-result-container">
                        <div  v-for="company in insuranceCompanies" :key="company.id" class="patient-card-search-result-line" @click="setInsuranceCompany(company)" >
                            <div hidden>{{company.id}}</div>
                            <div>{{company.value}}</div>
                        </div>
                    </div>
                </div>
                <div class="search-result-area" v-else>
                    <div class="search-result-container">
                        <div class="patient-card-search-result-line" @click="clearNothing">Nothing</div>
                    </div>
                </div>
            </div>
            <hr>
            <div>
                <b-tabs content-class="mt-3" fill active-nav-item-class="text-danger">
                    <b-tab title="Паспорт" active title-link-class="text-warning">
                        <label for="passport">Серия, номер паспорта:</label>
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><font-awesome-icon class="fa-for-menu" :icon="['fas', 'id-card']"/></div>
                            </div>
                            <input type="text" v-mask="'#### ######'" class="form-control" id="passport" name="passport" placeholder="Серия, номер паспорта" v-model="card.passport" :disabled="disabledInput">
                        </div>
                        <label for="fms-department">Отдел ФМС выдавший паспорт:</label>
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><font-awesome-icon class="fa-for-menu" :icon="['fas', 'id-card']"/></div>
                            </div>
                            <textarea class="form-control" id="fms-department" name="fms-department" :disabled="disabledInput">{{card.fmsDepartment}}</textarea>
                        </div>
                    </b-tab>
                    <b-tab title="Свидетельсво" title-link-class="text-warning">
                        <label for="birth-certificate">Серия, номер свидетельства:</label>
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><font-awesome-icon class="fa-for-menu" :icon="['fas', 'id-card']"/></div>
                            </div>
                            <input type="text" v-mask="'#### ######'" class="form-control" id="birth-certificate" name="birth-certificate" placeholder="Серия, номер свидетельства" v-model="card.birthCertificate" :disabled="disabledInput">
                        </div>
                        <label for="registry-office">Отдел ЗАГС выдавший свидетельство:</label>
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><font-awesome-icon class="fa-for-menu" :icon="['fas', 'id-card']"/></div>
                            </div>
                            <textarea class="form-control" id="registry-office" name="registry-office" :disabled="disabledInput">{{card.registryOffice}}</textarea>
                            <div id="fms-department-search-result-area" class="search-result-area"></div>
                        </div>
                    </b-tab>
                </b-tabs>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import SectionHeaderControls from "./SectionHeaderControls"
    export default {
        name: "CardDocuments",

        components: {
            SectionHeaderControls
        },

        computed: {
            ...mapState('app/patientCard', {
                card: state => state.card,
                insuranceCompanies: state => state.insuranceCompanies
            })
        },

        methods: {
            ...mapActions('app/patientCard', [
                'getInsuranceCompaniesAction',
                'setInsuranceCompanyAction',
                'clearNothingAction'
                ]),
            /**
             * Активировать / Деактивировать инпуты
             */
            toggleInputs: function () {
                this.disabledInput = !this.disabledInput;
            },
            /**
             * Поиск страховых компаний
             */
            getInsuranceCompanies: function() {
                clearTimeout(this.typingTimer);
                this.typingTimer = setTimeout( () => {
                    this.getInsuranceCompaniesAction({searchString: this.card.insuranceCompany});
                }, 500);
            },
            /**
             * Выбрат ькомпанию из списка
             * @param payload
             */
            setInsuranceCompany: function(payload){
                this.setInsuranceCompanyAction(payload);
            },
            /**
             * Очистить "Ничего не найдено"
             */
            clearNothing: function () {
                this.clearNothingAction();
            }
        },

        data() {
            return {
                typingTimer: 0,
                disabledInput: true
            }
        }
    }
</script>

<style scoped>
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
    /*.modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }*/
</style>