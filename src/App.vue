<template>
  <div id="wrapper">
    <component :is="layout"></component>
  </div>
</template>

<script>
    export default {
        components: {
            AppLayout: () => import("./layouts/AppLayout")
        },
        computed: {
            layout: function() {
                let layout = this.$route.meta.layout;
                return layout === undefined ? 'app-layout' : layout + '-layout';
            }
        }
    }
</script>

<style>
  html, body {
    margin:0;
    padding:0;
  }
  #header_section{
    height: 50px;
    background-color: grey;
  }
  #main_section{
    background-color: #6f42c1;
    color: royalblue;
  }
  #footer_section{
    height: 200px;
    background-color: #0b2e13;
  }
  #sidebar_section{
    width: 270px;
    background-color: #37474f;
    float: left;
    height: calc(100vh - 50px);
  }
  #content_section{
    width: 100%;
    min-height: calc(100vh - 250px); /*Учитывая размер хидера, должен отнять*/
    background-color: white;
  }
  .module-wrapper{
    background-color: #eeeeee;
    border: solid 1px;
    border-color: #c1c1c1;
    border-radius: 10px;
    width: 100%;
    padding: 15px;
  }
</style>
