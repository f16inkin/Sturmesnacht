<template>
    <div class="patient-card-information-section box-shadow--2dp">
        <div class="patient-card-information-section-header">
            <font-awesome-icon  class="fa-for-menu" :icon="['fas', 'folder']"/> Документы
        </div>
        <div class='patient-card-information-section-body'>
            <label for="insurance-certificate">СНИЛС<span class="red-asterisk">*</span>:</label>
            <div class="input-group mb-2">
                <div class="input-group-prepend">
                    <div class="input-group-text"><font-awesome-icon class="fa-for-menu" :icon="['fas', 'id-card']"/></div>
                </div>
                <input type="text" v-mask="'###-###-### ##'" class="form-control" id="insurance-certificate" name="insurance-certificate" placeholder="СНИЛС" :value="insuranceCertificate" :disabled="disabledInput">
            </div>
            <hr>
            <label for="policy-number">Единый номер полиса<span class="red-asterisk">*</span>:</label>
            <div class="input-group mb-2">
                <div class="input-group-prepend">
                    <div class="input-group-text"><font-awesome-icon class="fa-for-menu" :icon="['fas', 'clipboard']"/></div>
                </div>
                <input type="text" v-mask="'####-####-####-####'" class="form-control" id="policy-number" name="policy-number" placeholder="Номер полиса" :value="policyNumber" :disabled="disabledInput">
            </div>
            <label for="insurance-company">Страховая компания:</label>
            <div class="input-group mb-2">
                <input name="insurance-company-id" :value="insuranceCompanyId" hidden>
                <div class="input-group-prepend">
                    <div class="input-group-text"><font-awesome-icon class="fa-for-menu" :icon="['fas', 'clipboard']"/></div>
                </div>
                <input type="text" class="form-control" id="insurance-company" name="insurance-company" placeholder="Страховая компания" :value="insuranceCompany" :disabled="disabledInput">
                <div id="insurance-company-search-result-area" class="search-result-area"></div>
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
                            <input type="text" class="form-control" id="passport" name="passport" placeholder="Серия, номер паспорта" :value="passport" :disabled="disabledInput">
                        </div>
                        <label for="fms-department">Отдел ФМС выдавший паспорт:</label>
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><font-awesome-icon class="fa-for-menu" :icon="['fas', 'id-card']"/></div>
                            </div>
                            <textarea class="form-control" id="fms-department" name="fms-department" :disabled="disabledInput">{{fmsDepartment}}</textarea>
                        </div>
                    </b-tab>
                    <b-tab title="Свидетельсво" title-link-class="text-warning">
                        <label for="birth-certificate">Серия, номер свидетельства:</label>
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><font-awesome-icon class="fa-for-menu" :icon="['fas', 'id-card']"/></div>
                            </div>
                            <input type="text" class="form-control" id="birth-certificate" name="birth-certificate" placeholder="Серия, номер свидетельства" :value="birthCertificate" :disabled="disabledInput">
                        </div>
                        <label for="registry-office">Отдел ЗАГС выдавший свидетельство:</label>
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><font-awesome-icon class="fa-for-menu" :icon="['fas', 'id-card']"/></div>
                            </div>
                            <textarea class="form-control" id="registry-office" name="registry-office" :disabled="disabledInput">{{registryOffice}}</textarea>
                            <div id="fms-department-search-result-area" class="search-result-area"></div>
                        </div>
                    </b-tab>
                </b-tabs>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CardDocuments",
        props: ['insuranceCertificate', 'policyNumber', 'insuranceCompanyId', 'insuranceCompany',
            'passport', 'fmsDepartment', 'birthCertificate', 'registryOffice', 'disabledInput']
        /*props: {
            insuranceCertificate:{},
            policyNumber: {},
            insuranceCompanyId: {},
            insuranceCompany: {},
            passport: {},
            fmsDepartment: {},
            birthCertificate: {default: '-123'},
            registryOffice: {
                type: String,
                required: true,
                default: '-',
            },
            disabledInput: {}
        }*/
    }
</script>

<style scoped>

</style>