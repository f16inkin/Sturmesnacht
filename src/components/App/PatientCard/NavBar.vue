<template>
    <div class="row">
        <div id="buttons" class="col-6"><nav-bar-buttons></nav-bar-buttons></div>
        <div id="search" class="col-6"><nav-bar-search></nav-bar-search></div>
    </div>
</template>

<script>
    import NavBarSearch from "./NavBarSearch";
    import NavBarButtons from "./NavBarButtons";
    export default {
        name: "NavBar",
        components: {
          NavBarSearch, NavBarButtons
        }
    }
</script>

<style scoped>

</style>