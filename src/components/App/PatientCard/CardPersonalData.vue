<template>
    <div class="patient-card-information-section box-shadow--2dp">
        <div class="patient-card-information-section-header">
            <div class="row">
                <div class="col-6">
                    <font-awesome-icon class="fa-for-menu" :icon="['fas', 'user-circle']"/> Личные данные
                </div>
                <div class="col-6">
                    <section-header-controls @toggleInputs="toggleInputs"></section-header-controls>
                </div>
            </div>
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
                <input type="text" class="form-control" id="card-number" name="card-number" placeholder="Номер карты" v-model="card.cardNumber" :disabled="disabledInput">
            </div>
            <label  for="full-name">ФИО<span class="red-asterisk">*</span>:</label>
            <div class="input-group mb-2">
                <div class="input-group-prepend">
                    <div class="input-group-text"><font-awesome-icon class="fa-for-menu" :icon="['fas', 'user-circle']"/></div>
                </div>
                <input type="text" class="form-control" id="full-name" name="full-name" placeholder="ФИО" :value="surname + ' ' + firstName + ' ' + secondName" :disabled="disabledInput">
            </div>
            <label  for="gender">Пол:</label>
            <div class="input-group mb-2">
                <div class="input-group-prepend">
                    <div class="input-group-text"><font-awesome-icon class="fa-for-menu" :icon="['fas', 'venus-mars']"/></div>
                </div>
                <select v-model="card.genderId" id="gender" name="gender" class="custom-select" :disabled="disabledInput">
                    <option v-for="gender in genders" :value="gender.id">{{gender.name}}</option>
                </select>
            </div>
            <label  for="date-birth">Дата рождения<span class="red-asterisk">*</span>:</label>
            <div class="input-group mb-2">
                <div class="input-group-prepend">
                    <div class="input-group-text"><font-awesome-icon class="fa-for-menu" :icon="['fas', 'birthday-cake']"/></div>
                </div>
                <input type="date" class="form-control" id="date-birth" name="date-birth" v-model = "card.dateBirth" :disabled="disabledInput">
            </div>
            <label  for="telephone">Номер телефона:</label>
            <div class="input-group mb-2">
                <div class="input-group-prepend">
                    <div class="input-group-text"><font-awesome-icon class="fa-for-menu" :icon="['fas', 'phone']"/></div>
                </div>
                <input type="text" v-mask="'8(###)###-##-##'" class="form-control" id="telephone" name="telephone" placeholder="Номер телефона" v-model = "card.telephone" :disabled="disabledInput">
            </div>
            <label  for="email">Электронная почта:</label>
            <div class="input-group mb-2">
                <div class="input-group-prepend">
                    <div class="input-group-text"><font-awesome-icon class="fa-for-menu" :icon="['fas', 'envelope']"/></div>
                </div>
                <input type="text" class="form-control" id="email" name="email" placeholder="Email" v-model="card.email" :disabled="disabledInput">
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import SectionHeaderControls from "./SectionHeaderControls"
    export default {
        name: "CardPersonalData",
        props:['surname', 'firstName', 'secondName'],
        components: {
            SectionHeaderControls
        },
        computed: {
            ...mapState('app/patientCard', {
                card: state => state.card
            })
        },
        methods: {
            toggleInputs: function () {
                this.disabledInput = !this.disabledInput;
            }
        },
        data() {
            return {
                disabledInput: true,
                genders: [
                    {id: 1, name: 'Мужчина'},
                    {id: 2, name: 'Женщина'},
                ]
            }
        }
    }
</script>

<style scoped>

</style>