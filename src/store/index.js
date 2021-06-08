import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from "./modules/auth/auth";

Vue.use(Vuex)
export default new Vuex.Store({
    namespaced: false,
    state: {
        loading: false,
        msg: [],
        errors: [],
    },
    getters: {
        getLoading(state) {
            return state.loading
        },
        getErrors(state) {
            return state.errors
        },
        getMsg(state) {
            return state.msg
        }
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload
        },
        setErrors(state, payload) {
            state.errors = payload
        },
        setMsg(state, payload) {
            state.msg = payload
        }
    },
    actions: {
        _loading({commit}, payload) {
            commit('setLoading', payload)
        }
    },
    modules: {auth},
    plugins: [createPersistedState()]
})
