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
        </td>
    </tr>
</template>

<script>
    export default {
        name: "CardsTableLine",
        props: ['card'],
        methods: {
            showCard:function () {
                alert('Show Card' + this.card.id)
            }
        }
    }
</script>

<style scoped>

</style>