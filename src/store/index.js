import Vue from 'vue'
import Vuex from 'vuex'

/**
 * Модули
 */
import PatientCard from './modules/App/PatientCard'

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        app:{
            namespaced: true,
            modules: {
                patientCard: PatientCard
            }
        },
        admin:{
            namespaced: true,
            modules: {

            }
        }
    }
})