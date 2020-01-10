<template>
    <div class="patient-card-information-section box-shadow--2dp">
        <div class="patient-card-information-section-header">
            <font-awesome-icon class="fa-for-menu" :icon="['fas', 'user-circle']"/> Личные данные
        </div>
        <div class='patient-card-information-section-body'>
            <div class="row">
                <div class="col-6">
                    <div id="patient-card-alive-section" class="patient-card-status blocked-status">
                        <i id="patient-alive-image"></i>
                        <i id="patient-alive-status"></i>
                    </div>
                </div>
                <div class="col-6">
                    <div id="patient-card-attached-section" class="patient-card-status blocked-status">
                        <i id="patient-attached-image"></i>
                        <i id="patient-attached-status"></i>
                    </div>
                </div>
            </div>
            <hr>
            <label for="card-number">Номер карты<span class="red-asterisk">*</span>:</label>
            <div class="input-group mb-2">
                <div class="input-group-prepend">
                    <div class="input-group-text"><font-awesome-icon class="fa-for-menu" :icon="['fas', 'id-card']"/></div>
                </div>
                <input type="text" class="form-control" id="card-number" name="card-number" placeholder="Номер карты" disabled>
            </div>
            <label  for="full-name">ФИО<span class="red-asterisk">*</span>:</label>
            <div class="input-group mb-2">
                <div class="input-group-prepend">
                    <div class="input-group-text"><font-awesome-icon class="fa-for-menu" :icon="['fas', 'user-circle']"/></div>
                </div>
                <input type="text" class="form-control" id="full-name" name="full-name" placeholder="ФИО" :value="surname + ' ' + firstName + ' ' + secondName" disabled>
            </div>
            <label  for="gender">Пол:</label>
            <div class="input-group mb-2">
                <div class="input-group-prepend">
                    <div class="input-group-text"><font-awesome-icon class="fa-for-menu" :icon="['fas', 'venus-mars']"/></div>
                </div>
                <select id="gender" name="gender" class="custom-select" disabled>

                </select>
            </div>
            <label  for="date-birth">Дата рождения<span class="red-asterisk">*</span>:</label>
            <div class="input-group mb-2">
                <div class="input-group-prepend">
                    <div class="input-group-text"><font-awesome-icon class="fa-for-menu" :icon="['fas', 'birthday-cake']"/></div>
                </div>
                <input type="date" class="form-control" id="date-birth" name="date-birth" :value = "dateBirth" disabled>
            </div>
            <label  for="telephone">Номер телефона:</label>
            <div class="input-group mb-2">
                <div class="input-group-prepend">
                    <div class="input-group-text"><font-awesome-icon class="fa-for-menu" :icon="['fas', 'phone']"/></div>
                </div>
                <input type="text" class="form-control" id="telephone" name="telephone" placeholder="Номер телефона" :value = "telephone" disabled>
            </div>
            <label  for="email">Электронная почта:</label>
            <div class="input-group mb-2">
                <div class="input-group-prepend">
                    <div class="input-group-text"><font-awesome-icon class="fa-for-menu" :icon="['fas', 'envelope']"/></div>
                </div>
                <input type="text" class="form-control" id="email" name="email" placeholder="Email" :value="email" disabled>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PersonalData",
        props:['surname', 'firstName', 'secondName', 'dateBirth', 'telephone', 'email'],
    }
</script>

<style scoped>

</style>