<template>
    <div class="patient-card-information-section box-shadow--2dp">
        <div class="patient-card-information-section-header">
            <font-awesome-icon  class="fa-for-menu" :icon="['fas', 'address-book']"/> Адреса
        </div>
        <div class='patient-card-information-section-body'>
            <label for="region">Регион:</label>
            <div  class="input-group mb-2">
                <input name="region-id" :value="regionId" hidden>
                <div class="input-group-prepend">
                    <div class="input-group-text"><font-awesome-icon  class="fa-for-menu" :icon="['fas', 'address-book']"/></div>
                </div>
                <input type="text" class="form-control" id="region" name="region" placeholder="Регион" :value="regionName" :disabled="disabledInput">
                <div id="region-search-result-area" class="search-result-area"></div>
            </div>
            <label for="district">Район:</label>
            <div class="input-group mb-2">
                <input name="district-id" :value="districtId" hidden>
                <div class="input-group-prepend">
                    <div class="input-group-text"><font-awesome-icon  class="fa-for-menu" :icon="['fas', 'address-book']"/></div>
                </div>
                <input type="text" class="form-control" id="district" name="district" placeholder="Район" :value="districtName" :disabled="disabledInput">
                <div id="district-search-result-area" class="search-result-area"></div>
            </div>
            <label for="locality">Населенный пункт:</label>
            <div class="input-group mb-2">
                <input name="locality-id" :value="localityId" hidden>
                <div class="input-group-prepend">
                    <div class="input-group-text"><font-awesome-icon  class="fa-for-menu" :icon="['fas', 'address-book']"/></div>
                </div>
                <input type="text" class="form-control" id="locality" name="locality" placeholder="Населенный пункт" :value="localityName" :disabled="disabledInput">
                <div id="locality-search-result-area" class="search-result-area"></div>
            </div>
            <label for="street">Улица:</label>
            <div class="input-group mb-2">
                <input name="street-id" :value="streetId" hidden>
                <div class="input-group-prepend">
                    <div class="input-group-text"><font-awesome-icon  class="fa-for-menu" :icon="['fas', 'address-book']"/></div>
                </div>
                <input type="text" class="form-control" id="street" name="street" placeholder="Улица" :value="streetName" :disabled="disabledInput">
                <div id="street-search-result-area" class="search-result-area"></div>
            </div>
            <div class="row">
                <div class="col-6">
                    <label for="house-number">Номер дома:</label>
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text"><font-awesome-icon  class="fa-for-menu" :icon="['fas', 'address-book']"/></div>
                        </div>
                        <input type="text" class="form-control" id="house-number" name="house-number" :value="houseNumber" :disabled="disabledInput">
                    </div>
                </div>
                <div class="col-6">
                    <label for="apartment">Номер квартиры:</label>
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text"><font-awesome-icon  class="fa-for-menu" :icon="['fas', 'address-book']"/></div>
                        </div>
                        <input type="text" class="form-control" id="apartment" name="apartment" :value="apartmentNumber" :disabled="disabledInput">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Addresses",
        props: ['regionId', 'regionName', 'districtId', 'districtName', 'localityId', 'localityName', 'streetId',
            'streetName', 'houseNumber', 'apartmentNumber', 'disabledInput'],
    }
</script>

<style scoped>

</style>