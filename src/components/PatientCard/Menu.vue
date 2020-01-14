<template>
    <div class="row">
        <div id="buttons" class="col-6">
            <div class="row">
                <div id="card-control-buttons" class="col-8">
                    <span v-for="button in buttons">
                        <transition name="fade">
                            <button  v-show="button.show" :class="button.class" @click="button.action" :disabled="button.disable"><font-awesome-icon  class="fa-for-menu" :icon="['fas', button.icon]"/> {{button.title}}</button>
                        </transition>
                    </span>
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
            editCard: function(){
                this.$emit('editCard', {name: 'Name', surname: 'Surname'});
                this.editButton.show = false;
                this.saveButton.show = true;
            },
            saveCard: function () {
                this.editButton.show = true;
                this.saveButton.show = false;
                this.$emit('saveCard');
            }
        },
        data(){
            return {
                createButton: {
                    title: 'Создать',
                    icon: 'plus-circle',
                    class: 'btn btn-dark btn-sm mr-1',
                    action: 'none',
                    disable: false,
                    show:true
                },
                editButton: {
                    title: 'Изменить',
                    icon: 'edit',
                    class: 'btn btn-dark btn-sm mr-1',
                    action: this.editCard,
                    disable: false,
                    show:true
                },
                saveButton: {
                    title: 'Сохранить',
                    icon: 'save',
                    class: 'btn btn-success btn-sm mr-1',
                    action: this.saveCard,
                    disable: false,
                    show: false
                },
                buttons:[]
            }

        },
        mounted: function () {
            this.buttons = [this.createButton, this.editButton, this.saveButton];
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
 .fade-enter-active, .fade-leave-active {
     transition: opacity .8s;
 }
 .fade-enter, .fade-leave-to {
     opacity: 0;
 }
</style>