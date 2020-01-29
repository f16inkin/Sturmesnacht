<template>
    <div class="input-group mb-2">
        <div class="input-group-prepend">
            <div class="input-group-text"><font-awesome-icon  class="fa-for-menu" :icon="['fas', 'search']"/> </div>
        </div>
        <input type="text" class="form-control" name="card-search" placeholder="Поиск" @keyup.enter="getCards" @keyup.backspace="getCard" v-model="search.searchString">
        <div class="input-group-append">
            <div  class="input-group-text"><b>Найдено:</b></div>
        </div>
        <div class="input-group-append">
            <div class="input-group-text"><span id="patient-card-found-records" class="badge badge-dark">{{cardsCount}}</span></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Search",
        methods: {
            getCards: function () {
                if (this.search.searchString.length > 0) {
                    this.$store.dispatch('patientCard/getCardsAction', this.search);
                }
            },
            getCard: function () {
                if (this.search.searchString.length === 0){
                    this.$store.dispatch('patientCard/getCardAction');
                }
            }
        },
        computed:{
            cardsCount(){
                return this.$store.getters.cardsCountGetter;
            }
        },
        data() {
            return {
                search: {
                    searchString : '',
                    selectedPage : 1
                },
            }
        }
    }
</script>

<style scoped>

</style>