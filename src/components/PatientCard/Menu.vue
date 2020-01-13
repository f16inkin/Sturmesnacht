<template>
    <div class="row">
        <div id="buttons" class="col-6">
            <div class="row">
                <div id="card-control-buttons" class="col-8">
                    <span v-for="button in buttons">
                        <transition name="fade">
                            <button  v-show="button.show" class="btn btn-dark btn-sm mr-1" @click="button.action(button)" :disabled="button.disable" :style="{display:button.display}"><font-awesome-icon  class="fa-for-menu" :icon="['fas', button.icon]"/> {{button.title}}</button>
                        </transition>
                    </span>

                    <!--<button class="btn btn-dark btn-sm mr-1"><font-awesome-icon  class="fa-for-menu" :icon="['fas', 'plus-circle']"/> Создать</button>
                    <button class="btn btn-dark btn-sm" @click="editCard"><font-awesome-icon  class="fa-for-menu" :icon="['fas', 'edit']"/> Изменить</button>-->
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
            editCard: function(button){
                this.$emit('editCard', {name: 'Name', surname: 'Surname'});
                button.show = false;
            },
            saveCard: function () {

            }
        },
        data(){
            return {
                buttons: [
                    {
                        title: 'Создать',
                        icon: 'plus-circle',
                        style: 'btn-dark',
                        action: 'none',
                        disable: false,
                        show:true
                    },
                    {
                        title: 'Изменить',
                        icon: 'edit',
                        style: 'btn-dark',
                        action: this.editCard,
                        disable: false,
                        show:true
                    },
                    {
                        title: 'Сохранить',
                        icon: 'save',
                        style: 'btn-success',
                        action: this.saveCard,
                        disable: false,
                        show: true
                    }
                ]
            }

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
     transition: opacity .5s;
 }
 .fade-enter, .fade-leave-to {
     opacity: 0;
 }
</style>