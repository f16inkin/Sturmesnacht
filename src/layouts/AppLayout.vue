<template>
    <div id="application">
        <section id="header_section"></section>
        <section id="main_section">
            <section id="sidebar_section">
                <the-sidebar></the-sidebar>
            </section>
            <section id="content_section">
                <!--Выводится контент-->
                <router-view/>
            </section>
        </section>
        <section id="footer_section"></section>
    </div>
</template>

<script>
    import TheSidebar from "../components/Sidebar/TheSidebar";
    export default {
        name: "AppLayout",
        components: {TheSidebar}
    }
</script>

<style scoped>

</style>