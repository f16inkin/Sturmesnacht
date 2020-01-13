<template>
    <div class="patient-card-information-section box-shadow--2dp">
        <div class="patient-card-information-section-header">
            <font-awesome-icon  class="fa-for-menu" :icon="['fas', 'info-circle']"/> Дополнительно
        </div>
        <div class='patient-card-information-section-body'>
            <label for="workplace">Место работы:</label>
            <div class="input-group mb-2">
                <div class="input-group-prepend">
                    <div class="input-group-text"><font-awesome-icon  class="fa-for-menu" :icon="['fas', 'info-circle']"/></div>
                </div>
                <input type="text" class="form-control" id="workplace" name="workplace" placeholder="Место работы" :value="workplace" :disabled="disabledInput">
            </div>
            <label for="profession">Профессия:</label>
            <div class="input-group mb-2">
                <div class="input-group-prepend">
                    <div class="input-group-text"><font-awesome-icon  class="fa-for-menu" :icon="['fas', 'info-circle']"/></div>
                </div>
                <input type="text" class="form-control" id="profession" name="profession" placeholder="Профессия" :value="profession" :disabled="disabledInput">
            </div>
            <hr>
            <label for="notation">Примечание:</label>
            <div class="input-group mb-2">
                <div class="input-group-prepend">
                    <div class="input-group-text"><font-awesome-icon  class="fa-for-menu" :icon="['fas', 'info-circle']"/></div>
                </div>
                <textarea class="form-control" id="notation" name="notation" :disabled="disabledInput">{{notationText}}</textarea>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "Additionally",
        props: ['workplace', 'profession', 'notationText', 'disabledInput']
    }
</script>

<style scoped>

</style>