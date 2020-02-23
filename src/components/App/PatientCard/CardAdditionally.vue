<template>
    <div class="patient-card-information-section box-shadow--2dp">
        <div class="patient-card-information-section-header">
            <div class="row">
                <div class="col-6">
                    <font-awesome-icon  class="fa-for-menu" :icon="['fas', 'info-circle']"/> Дополнительно
                </div>
                <div class="col-6">
                    <section-header-controls @toggleInputs="toggleInputs"></section-header-controls>
                </div>
            </div>
        </div>
        <div class='patient-card-information-section-body'>
            <label for="workplace">Место работы:</label>
            <div class="input-group mb-2">
                <div class="input-group-prepend">
                    <div class="input-group-text"><font-awesome-icon  class="fa-for-menu" :icon="['fas', 'info-circle']"/></div>
                </div>
                <input type="text" class="form-control" id="workplace" name="workplace" placeholder="Место работы" v-model="card.workplace" :disabled="disabledInput">
            </div>
            <label for="profession">Профессия:</label>
            <div class="input-group mb-2">
                <div class="input-group-prepend">
                    <div class="input-group-text"><font-awesome-icon  class="fa-for-menu" :icon="['fas', 'info-circle']"/></div>
                </div>
                <input type="text" class="form-control" id="profession" name="profession" placeholder="Профессия" v-model="card.profession" :disabled="disabledInput">
            </div>
            <hr>
            <label for="notation">Примечание:</label>
            <div class="input-group mb-2">
                <div class="input-group-prepend">
                    <div class="input-group-text"><font-awesome-icon  class="fa-for-menu" :icon="['fas', 'info-circle']"/></div>
                </div>
                <textarea class="form-control" id="notation" name="notation" :disabled="disabledInput">{{card.notation}}</textarea>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import SectionHeaderControls from "./SectionHeaderControls"
    export default {
        name: "CardAdditionally",
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
            }
        }
    }
</script>

<style scoped>

</style>