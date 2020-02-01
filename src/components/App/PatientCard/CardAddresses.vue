<template>
    <div class="patient-card-information-section box-shadow--2dp">
        <div class="patient-card-information-section-header">
            <div class="row">
                <div class="col-6">
                    <font-awesome-icon  class="fa-for-menu" :icon="['fas', 'address-book']"/> Адреса
                </div>
                <div class="col-6">
                    <section-header-controls @toggleInputs="toggleInputs"></section-header-controls>
                </div>
            </div>
        </div>
        <div class='patient-card-information-section-body'>
            <label for="region">Регион:</label>
            <div  class="input-group mb-2">
                <input name="region-id" v-model="card.regionId" hidden>
                <div class="input-group-prepend">
                    <div class="input-group-text"><font-awesome-icon  class="fa-for-menu" :icon="['fas', 'address-book']"/></div>
                </div>
                <input type="text" class="form-control" id="region" name="region" placeholder="Регион" v-model="card.region" :disabled="disabledInput">
                <div id="region-search-result-area" class="search-result-area"></div>
            </div>
            <label for="district">Район:</label>
            <div class="input-group mb-2">
                <input name="district-id" v-model="card.districtId" hidden>
                <div class="input-group-prepend">
                    <div class="input-group-text"><font-awesome-icon  class="fa-for-menu" :icon="['fas', 'address-book']"/></div>
                </div>
                <input type="text" class="form-control" id="district" name="district" placeholder="Район" v-model="card.district" :disabled="disabledInput">
                <div id="district-search-result-area" class="search-result-area"></div>
            </div>
            <label for="locality">Населенный пункт:</label>
            <div class="input-group mb-2">
                <input name="locality-id" v-model="card.localityId" hidden>
                <div class="input-group-prepend">
                    <div class="input-group-text"><font-awesome-icon  class="fa-for-menu" :icon="['fas', 'address-book']"/></div>
                </div>
                <input type="text" class="form-control" id="locality" name="locality" placeholder="Населенный пункт" v-model="card.locality" :disabled="disabledInput">
                <div id="locality-search-result-area" class="search-result-area"></div>
            </div>
            <label for="street">Улица:</label>
            <div class="input-group mb-2">
                <input name="street-id" v-model="card.streetId" hidden>
                <div class="input-group-prepend">
                    <div class="input-group-text"><font-awesome-icon  class="fa-for-menu" :icon="['fas', 'address-book']"/></div>
                </div>
                <input type="text" class="form-control" id="street" name="street" placeholder="Улица" v-model="card.street" :disabled="disabledInput">
                <div id="street-search-result-area" class="search-result-area"></div>
            </div>
            <div class="row">
                <div class="col-6">
                    <label for="house-number">Номер дома:</label>
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text"><font-awesome-icon  class="fa-for-menu" :icon="['fas', 'address-book']"/></div>
                        </div>
                        <input type="text" class="form-control" id="house-number" name="house-number" v-model="card.houseNumber" :disabled="disabledInput">
                    </div>
                </div>
                <div class="col-6">
                    <label for="apartment">Номер квартиры:</label>
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text"><font-awesome-icon  class="fa-for-menu" :icon="['fas', 'address-book']"/></div>
                        </div>
                        <input type="text" class="form-control" id="apartment" name="apartment" v-model="card.apartment" :disabled="disabledInput">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import SectionHeaderControls from "./SectionHeaderControls"
    export default {
        name: "CardAddresses",
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