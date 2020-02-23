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
                <input type="text" class="form-control" id="region" name="region" placeholder="Регион" @keyup="searchRegion" v-model="card.region" :disabled="disabledInput">
                <div class="search-result-area" v-if="dispositions.regions">
                    <div class="search-result-container">
                        <div  v-for="region in dispositions.regions" :key="region.id" class="patient-card-search-result-line" @click="setDisposition(region, 'regionId', 'region', 'regions')" >
                            <div hidden>{{region.id}}</div>
                            <div>{{region.value}}</div>
                        </div>
                    </div>
                </div>
                <div class="search-result-area" v-else>
                    <div class="search-result-container">
                        <div class="patient-card-search-result-line" @click="clearNothing">Nothing</div>
                    </div>
                </div>
            </div>
            <label for="district">Район:</label>
            <div class="input-group mb-2">
                <input name="district-id" v-model="card.districtId" hidden>
                <div class="input-group-prepend">
                    <div class="input-group-text"><font-awesome-icon  class="fa-for-menu" :icon="['fas', 'address-book']"/></div>
                </div>
                <input type="text" class="form-control" id="district" name="district" placeholder="Район" @keyup="searchDistrict" v-model="card.district" :disabled="disabledInput">
                <div class="search-result-area" v-if="dispositions.districts">
                    <div class="search-result-container">
                        <div  v-for="district in dispositions.districts" :key="district.id" class="patient-card-search-result-line" @click="setDisposition(district, 'districtId', 'district', 'districts')" >
                            <div hidden>{{district.id}}</div>
                            <div>{{district.value}}</div>
                        </div>
                    </div>
                </div>
                <div class="search-result-area" v-else>
                    <div class="search-result-container">
                        <div class="patient-card-search-result-line" @click="clearNothing">Nothing</div>
                    </div>
                </div>
            </div>
            <label for="locality">Населенный пункт:</label>
            <div class="input-group mb-2">
                <input name="locality-id" v-model="card.localityId" hidden>
                <div class="input-group-prepend">
                    <div class="input-group-text"><font-awesome-icon  class="fa-for-menu" :icon="['fas', 'address-book']"/></div>
                </div>
                <input type="text" class="form-control" id="locality" name="locality" placeholder="Населенный пункт" @keyup="searchLocality" v-model="card.locality" :disabled="disabledInput">
                <div class="search-result-area" v-if="dispositions.localities">
                    <div class="search-result-container">
                        <div  v-for="locality in dispositions.localities" :key="locality.id" class="patient-card-search-result-line" @click="setDisposition(locality, 'localityId', 'locality', 'localities')" >
                            <div hidden>{{locality.id}}</div>
                            <div>{{locality.value}}</div>
                        </div>
                    </div>
                </div>
                <div class="search-result-area" v-else>
                    <div class="search-result-container">
                        <div class="patient-card-search-result-line" @click="clearNothing">Nothing</div>
                    </div>
                </div>
            </div>
            <label for="street">Улица:</label>
            <div class="input-group mb-2">
                <input name="street-id" v-model="card.streetId" hidden>
                <div class="input-group-prepend">
                    <div class="input-group-text"><font-awesome-icon  class="fa-for-menu" :icon="['fas', 'address-book']"/></div>
                </div>
                <input type="text" class="form-control" id="street" name="street" placeholder="Улица" @keyup="searchStreet" v-model="card.street" :disabled="disabledInput">
                <div class="search-result-area" v-if="dispositions.streets">
                    <div class="search-result-container">
                        <div  v-for="street in dispositions.streets" :key="street.id" class="patient-card-search-result-line" @click="setDisposition(street, 'streetId', 'street', 'streets')" >
                            <div hidden>{{street.id}}</div>
                            <div>{{street.value}}</div>
                        </div>
                    </div>
                </div>
                <div class="search-result-area" v-else>
                    <div class="search-result-container">
                        <div class="patient-card-search-result-line" @click="clearNothing">Nothing</div>
                    </div>
                </div>
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
    import { mapState, mapActions } from 'vuex';
    import SectionHeaderControls from "./SectionHeaderControls"
    export default {
        name: "CardAddresses",

        components: {
            SectionHeaderControls
        },

        computed: {
            ...mapState('app/patientCard', {
                card: state => state.card,
                dispositions: state => state.dispositions
            })
        },

        methods: {
            ...mapActions('app/patientCard', [
                'getDispositionsAction',
                'setDispositionAction',
                'clearDispositionsAction',
                'clearNothingAction'
            ]),
            /**
             * Активировать / Деактивировать инпуты
             */
            toggleInputs: function () {
                this.disabledInput = !this.disabledInput;
            },
            /**
             * Поиск региона
             */
            searchRegion: function() {
                clearTimeout(this.typingTimer);
                this.typingTimer = setTimeout( () => {
                    this.clearDispositions(['district', 'locality', 'street', 'regionId', 'districtId', 'localityId', 'streetId']);
                    this.getDisposition({searchField: 'regions', searchString: this.card.region, searchParams: '', disposition: 'regions'});
                }, 500);
            },
            /**
             * Поиск района
             */
            searchDistrict: function() {
                clearTimeout(this.typingTimer);
                this.typingTimer = setTimeout( () => {
                    this.clearDispositions(['locality', 'street', 'localityId', 'streetId']);
                    this.getDisposition({searchField: 'districts', searchString: this.card.district, searchParams: this.card.regionId, disposition: 'districts'});
                }, 500);
            },
            /**
             * Поиск населенного пункта
             */
            searchLocality: function() {
                clearTimeout(this.typingTimer);
                this.typingTimer = setTimeout( () => {
                    this.clearDispositions(['street', 'streetId']);
                    this.getDisposition({searchField: 'localities', searchString: this.card.locality, searchParams: this.card.districtId, disposition: 'localities'});
                }, 500);
            },
            /**
             * поиск улицы
             */
            searchStreet: function() {
                clearTimeout(this.typingTimer);
                this.typingTimer = setTimeout( () => {
                    this.getDisposition({searchField: 'streets', searchString: this.card.street, searchParams: this.card.localityId, disposition: 'streets'});
                }, 500);
            },
            /**
             * Получить искомую диспозицию по соответсвующим параметрам
             * @param payload
             */
            getDisposition: function (payload) {
                this.getDispositionsAction(payload);
            },
            /**
             * Выбрать диспозицию и определить значение в нужно поле
             * @param payload
             * @param idField
             * @param valueField
             * @param dispositionSection
             */
            setDisposition: function(payload, idField, valueField, dispositionSection) {
                payload.idFieldName = idField;
                payload.valueFieldName = valueField;
                payload.dispositionSection = dispositionSection;
                this.setDispositionAction(payload);
            },
            /**
             * Используется для зачистки диспозиций state.card, когда производится поиск вышестоящей диспозиции
             * @param payload
             */
            clearDispositions: function (payload) {
                this.clearDispositionsAction(payload);
            },
            /**
             * Очистить "Ничего не найдено"
             */
            clearNothing: function () {
                this.clearNothing();
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

</style>