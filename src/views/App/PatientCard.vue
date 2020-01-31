<template>
    <div class="container-fluid">
        <div class="row" style="padding: 10px">
            <div class="module-wrapper">
                <div id="patient-card-menu"><nav-bar></nav-bar></div>
                <div id="patient-card-body"><component :is="currentView"></component></div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import NavBar from "../../components/App/PatientCard/NavBar";
    import Card from "../../components/App/PatientCard/Card";
    import Cards from "../../components/App/PatientCard/Cards";
    export default {
        name: "PatientCard",
        components: {NavBar, Card, Cards},
        computed: {
            ...mapState('app/patientCard', {
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