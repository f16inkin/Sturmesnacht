import Vue from 'vue'
import Vuex from 'vuex'

/**
 * Модули
 */
import PatientCard from './modules/PatientCard'

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        patientCard: PatientCard
    }
})