<template>
    <div class="row">
        <div id="buttons" class="col-6">
            <div class="row">
                <div id="card-control-buttons" class="col-8">
                    <button class="btn btn-primary" @click="removeDisabled">Remove disabled</button>
                </div>
                <div id="card-auxiliary-buttons" class="col-4"></div>
            </div>
        </div>
        <div id="search" class="col-6">
            <div class="input-group mb-2">
                <div class="input-group-prepend">
                    <div class="input-group-text"><font-awesome-icon  class="fa-for-menu" :icon="['fas', 'search']"/> </div>
                </div>
                <input type="text" class="form-control" id="card-search" name="card-search" placeholder="Поиск">
                <div class="input-group-append">
                    <div  class="input-group-text"><b>Найдено:</b></div>
                </div>
                <div class="input-group-append">
                    <div class="input-group-text"><span id="patient-card-found-records" class="badge badge-dark">0</span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Menu",
        methods: {
            removeDisabled: function(){
                this.$emit('removeDisabled', {name: 'Name', surname: 'Surname'});
            },
        }
    }
</script>

<style scoped>
 #card-auxiliary-buttons{
     padding: 2px;
     text-align: right;
     height: 37px;
     background: #eeeeee;
     border-radius: 5px;
     border: solid 1px;
     border-color: #dce1e5;
 }
</style>