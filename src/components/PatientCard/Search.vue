<template>
    <div class="input-group mb-2">
        <div class="input-group-prepend">
            <div class="input-group-text"><font-awesome-icon  class="fa-for-menu" :icon="['fas', 'search']"/> </div>
        </div>
        <input type="text" class="form-control" name="card-search" placeholder="Поиск" @keyup.enter="searchCards" @keyup.backspace="getCard" v-model="searchText">
        <div class="input-group-append">
            <div  class="input-group-text"><b>Найдено:</b></div>
        </div>
        <div class="input-group-append">
            <div class="input-group-text"><span id="patient-card-found-records" class="badge badge-dark">0</span></div>
        </div>
    </div>
</template>

<script>
    import { bus } from "../../main";
    export default {
        name: "Search",
        methods: {
            searchCards: function () {
                if (this.searchText.length > 0) {
                    bus.$emit('searchCards', this.searchText);
                }
            },
            getCard: function () {
                if (this.searchText.length === 0){
                    bus.$emit('getCard');
                }
            }
        },
        data() {
            return {
                /**
                 * Касаемо смены видов
                 */
                searchText: '',
            }
        }
    }
</script>

<style scoped>

</style>