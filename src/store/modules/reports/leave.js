import axios from "axios";

const state = {
    loading: false,
    errors: null,
    leave: null
}
const getters = {
    getLoading(state) {
        return state.loading
    },
    getLeave(state) {
        return state.leave
    }
}

const mutations = {
    setLoading(state, payload) {
        state.loading = payload
    },
    setErrors(state, payload) {
        state.errors = payload
    },
    setLeave(state, payload) {
        state.leave = payload
    }
}

const actions = {
    _get_leave({commit}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.get('/reports/leave', {params: payload}).then(({data}) => {
                commit('setLoading', false)
                commit('app/setErrors', null, {root: true})
                commit('setLeave', data)
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
