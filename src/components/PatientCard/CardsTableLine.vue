<template>
    <tr class="tr-table-content">
        <td>{{line.surname}}</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td><i class="" style="font-size: 18px;"></i></td>
        <td><i class="" style="font-size: 18px;"></i></td>
        <td>
            <button class="btn btn-outline-success btn-sm">
                <i class="fa fa-search"></i> Посмотреть
            </button>
        </td>
    </tr>
</template>

<script>
    export default {
        name: "CardsTableLine",
        props: ['line']
    }
</script>

<style scoped>

</style>