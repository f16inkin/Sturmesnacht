<template>
    <div class="patient-card-information-section box-shadow--2dp">
        <div class="patient-card-information-section-header">
            <i class="fa fa-folder" aria-hidden="true"></i> Документы
        </div>
        <div class='patient-card-information-section-body'>
            <label for="insurance-certificate">СНИЛС<span class="red-asterisk">*</span>:</label>
            <div class="input-group mb-2">
                <div class="input-group-prepend">
                    <div class="input-group-text"><i class="fa fa-id-card"></i> </div>
                </div>
                <input type="text" class="form-control" id="insurance-certificate" name="insurance-certificate" placeholder="СНИЛС" :value="insuranceCertificate" disabled>
            </div>
            <hr>
            <label for="policy-number">Единый номер полиса<span class="red-asterisk">*</span>:</label>
            <div class="input-group mb-2">
                <div class="input-group-prepend">
                    <div class="input-group-text"><i class="fa fa-clipboard"></i> </div>
                </div>
                <input type="text" class="form-control" id="policy-number" name="policy-number" placeholder="Номер полиса" value="" disabled>
            </div>
            <label for="insurance-company">Страховая компания:</label>
            <div class="input-group mb-2">
                <input name="insurance-company-id" value="" hidden>
                <div class="input-group-prepend">
                    <div class="input-group-text"><i class="fa fa-clipboard"></i> </div>
                </div>
                <input type="text" class="form-control" id="insurance-company" name="insurance-company" placeholder="Страховая компания" value="" disabled>
                <div id="insurance-company-search-result-area" class="search-result-area"></div>
            </div>
            <hr>
            <ul class="nav nav-tabs nav-fill" id="person-documents-navs" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active text-warning" id="passport-tab" data-toggle="tab" href="#passport-panel" role="tab" aria-controls="home" aria-selected="true">Паспорт</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-danger" id="birth-certificate-tab" data-toggle="tab" href="#birth-certificate-panel" role="tab" aria-controls="profile" aria-selected="false">Свидетельство</a>
                </li>
            </ul>
            <div class="tab-content" id="person-documents-content">
                <div class="tab-pane fade show active" id="passport-panel" role="tabpanel">
                    <label for="passport">Серия, номер паспорта:</label>
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text"><i class="fa fa-id-card"></i> </div>
                        </div>
                        <input type="text" class="form-control" id="passport" name="passport" placeholder="Серия, номер паспорта" value="" disabled>
                    </div>
                    <label for="fms-department">Отдел ФМС выдавший паспорт:</label>
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text"><i class="fa fa-id-card"></i> </div>
                        </div>
                        <textarea class="form-control" id="fms-department" name="fms-department" disabled></textarea>
                    </div>
                </div>
                <div class="tab-pane fade" id="birth-certificate-panel" role="tabpanel">
                    <label for="birth-certificate">Серия, номер свидетельства:</label>
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text"><i class="fa fa-id-card"></i> </div>
                        </div>
                        <input type="text" class="form-control" id="birth-certificate" name="birth-certificate" placeholder="Серия, номер свидетельства" value="" disabled>
                    </div>
                    <label for="registry-office">Отдел ЗАГС выдавший свидетельство:</label>
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text"><i class="fa fa-id-card"></i> </div>
                        </div>
                        <textarea class="form-control" id="registry-office" name="registry-office" disabled></textarea>
                        <div id="fms-department-search-result-area" class="search-result-area"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Documents",
        props: ['insuranceCertificate'],
    }
</script>

<style scoped>

</style>