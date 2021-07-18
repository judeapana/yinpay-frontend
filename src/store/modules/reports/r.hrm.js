import axios from "axios";

const state = {
    loading: false,
    errors: null,
    hrm: null
}
const getters = {
    getLoading(state) {
        return state.loading
    },
    getHrm(state) {
        return state.hrm
    }
}

const mutations = {
    setLoading(state, payload) {
        state.loading = payload
    },
    setErrors(state, payload) {
        state.errors = payload
    },
    setHrm(state, payload) {
        state.hrm = payload
    }
}

const actions = {
    _get_hrm({commit}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.get('/reports/r-hrm', {params: payload}).then(({data}) => {
                commit('setLoading', false)
                commit('app/setErrors', null, {root: true})
                commit('setHrm', data)
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
