<template>
    <div class="row" v-show="isAllowButtons">
        <div id="card-control-buttons" class="col-8">
            <span v-for="button in buttons">
                <transition name="fade">
                    <button  v-show="button.show" :class="button.class" @click="button.action" :disabled="button.disable"><font-awesome-icon  class="fa-for-menu" :icon="['fas', button.icon]"/> {{button.title}}</button>
                </transition>
            </span>
        </div>
        <div id="card-auxiliary-buttons" class="col-4">
            <button class="btn btn-dark btn-sm mr-1" @click="printTalon"><i class="fa fa-print"></i> Печать талона</button>
        </div>
    </div>
</template>

<script>
    const apiUrl = 'http://192.168.0.10';
    import { mapState } from 'vuex';
    import { bus } from "../../main";
    export default {
        name: "Buttons",
        computed: {
            ...mapState('patientCard', {
                isAllowButtons: state => state.isAllowButtons
            })
        },
        methods: {
            editCard: function(){
                bus.$emit('editCard', {name: 'Name1', surname: 'Surname', counter: 0});
                this.editButton.show = false;
                this.saveButton.show = true;
            },
            saveCard: function () {
                bus.$emit('saveCard');
                this.editButton.show = true;
                this.saveButton.show = false;
            },
            printTalon: function () {
                let talonPath = `${apiUrl}/app/patient-card/talon/ambulatory/show/${this.$router.currentRoute.params['id']}`;
                window.open(talonPath, '_blank');

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