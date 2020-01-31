<template>
    <tr class="tr-table-content">
        <td>{{card.surname + ' ' + card.firstname + ' ' + card.secondname}}</td>
        <td>{{card.card_number}}</td>
        <td>{{card.policy_number}}</td>
        <td>{{card.insurance_certificate}}</td>
        <td><i class="" style="font-size: 18px;"></i></td>
        <td><i class="" style="font-size: 18px;"></i></td>
        <td>
            <button class="btn btn-outline-success btn-sm" @click="showCard">
                <font-awesome-icon  class="fa-for-menu" :icon="['fas', 'search']"/> Посмотреть
            </button>
            <!--<router-link :to="{name: 'getCard', params: {id:this.card.id}}">
                <button class="btn btn-outline-warning btn-sm" @click="getCardAction(card.id)">
                    <font-awesome-icon  class="fa-for-menu" :icon="['fas', 'search']"/> Посмотреть
                </button>
            </router-link>-->
        </td>
    </tr>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        name: "CardsTableLine",
        props: ['card'],
        methods: {
            ...mapActions('app/patientCard', ['getCardAction']),
            showCard: function () {
                this.$router.currentRoute.params['id'] = this.card.id;
                this.getCardAction(this.card.id);
                window.history.pushState("", "", this.card.id);
            }
        }
    }
</script>

<style scoped>

</style>