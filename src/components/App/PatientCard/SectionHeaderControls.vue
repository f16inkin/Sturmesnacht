<template>
    <div class="controls-group">
        <transition-group name="fade">
            <button :key="1" v-show="editButton.show" class="btn btn-outline-light btn-sm mr-1" v-b-tooltip.hover title="Изменить" @click="editCard">
                <font-awesome-icon  class="fa-for-menu" :icon="['fas', 'edit']"/>
            </button>
            <button :key="2" v-show="saveButton.show" class="btn btn-outline-light btn-sm mr-1" v-b-tooltip.hover title="Сохранить" @click="saveCard">
                <font-awesome-icon  class="fa-for-menu" :icon="['fas', 'save']"/>
            </button>
        </transition-group>
    </div>
</template>

<script>
    export default {
        name: "SectionHeaderControls",
        methods: {
            editCard: function () {
                this.$emit('toggleInputs');
                this.toggleButtons();
            },
            saveCard: function () {
                this.$emit('toggleInputs');
                this.toggleButtons();
                //Далее тут запрос к Vuex для обновления карты
            },
            toggleButtons: function () {
                this.editButton.show = !this.editButton.show;
                this.saveButton.show = !this.saveButton.show;
            }
        },
        data(){
            return {
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
            }
        }
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .8s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    .controls-group{
        text-align: right;
    }
</style>