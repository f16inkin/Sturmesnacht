<template>
    <div class="container-fluid">
        <div class="row" style="padding: 10px">
            <div class="module-wrapper">
                <div id="patient-card-menu"><Menu></Menu></div>
                <div id="patient-card-body"><component :is="currentView"></component></div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import Menu from "../components/PatientCard/Menu";
    import Card from "../components/PatientCard/Card";
    import Cards from "../components/PatientCard/Cards";
    export default {
        name: "PatientCard",
        components: {Menu, Card, Cards},
        computed: {
            ...mapState('patientCard', {
                currentView: state => state.currentView
            })
        },
    }
</script>

<style>
    #patient-card-menu{
        height: 50px;
        width: 100%;
        background-color: white;
        margin-bottom: 10px;
        padding: 6px;
        border: solid 1px;
        border-radius: 5px;
        border-color: #dce1e5;
    }
    #patient-card-body{
        width: 100%;
        padding: 10px;
    }
</style>