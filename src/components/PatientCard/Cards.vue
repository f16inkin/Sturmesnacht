<template>
    <div>
        <div id="cards-data-search-section" class="row" style="padding: 10px;">
            <table id="cards-data-table" class="table-striped table-mine full-width box-shadow--2dp">
                <thead>
                <tr>
                    <th style="width: 20%;">ФИО</th>
                    <th style="width: 10%;">Номер карты</th>
                    <th style="width: 15%;">Полис</th>
                    <th style="width: 15%;">Снилс</th>
                    <th style="width: 10%;">Статус</th>
                    <th style="width: 10%;">Прикрепление</th>
                    <th style="width: 20%;">Действия</th>
                </tr>
                </thead>
                <tbody id="cards-data-table-content">
                <cards-table-line v-for="card in this.emittedData" :key="card.id" :card="card"></cards-table-line>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import CardsTableLine from '../../components/PatientCard/CardsTableLine';
    export default {
        name: "Cards",
        props:['emittedData'],
        components: {
            CardsTableLine
        }
    }
</script>

<style>
    .table-mine{
        border-collapse: separate;
        border-spacing: 1px;
        margin-bottom: 5px;
        width: 100%;
    }
    .table-mine thead{
        background-color: #37474F;
        color: white;
        font-size: 12px;
    }
    .table-mine > thead > tr > th,
    .table-mine > tbody > tr > th,
    .table-mine > tfoot > tr > th,
    .table-mine > thead > tr > td,
    .table-mine > tbody > tr > td,
    .table-mine > tfoot > tr > td {
        padding: 8px;
        line-height: 1.42857143;
        text-align: center;
    }
    .table-mine tbody{
        color: #37474F;
        background-color: white;
        font-size: 12px;
    }
</style>