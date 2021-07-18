import axios from "axios";

const state = {
    loading: false,
    errors: null,
    ssnit: null
}
const getters = {
    getLoading(state) {
        return state.loading
    },
    getSsnit(state) {
        return state.ssnit
    }
}

const mutations = {
    setLoading(state, payload) {
        state.loading = payload
    },
    setErrors(state, payload) {
        state.errors = payload
    },
    setSsnit(state, payload) {
        state.ssnit = payload
    }
}

const actions = {
    _get_ssnit({commit}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.get('/reports/ssnit', {params: payload}).then(({data}) => {
                commit('setLoading', false)
                commit('app/setErrors', null, {root: true})
                commit('setSsnit', data)
                resolve(data)
            }).catch((error) => {
                commit('app/setErrors', error.response.data, {root: true})
                commit('setLoading', false)
                commit('app/setMsg', null, {root: true})
                reject(error.response.data)
            })
        })))
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
