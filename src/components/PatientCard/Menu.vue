<template>
    <div class="row">
        <div id="buttons" class="col-6"><Buttons :allow-buttons="allowButtons"></Buttons></div>
        <div id="search" class="col-6"><Search></Search></div>
    </div>
</template>

<script>
    import Search from "../../components/PatientCard/Search";
    import Buttons from "../../components/PatientCard/Buttons";
    export default {
        name: "Menu",
        props: ['allowButtons'],
        components: {
          Search, Buttons
        }
    }
</script>

<style scoped>

</style>