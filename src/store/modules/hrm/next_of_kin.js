import axios from "axios";

const state = {
    loading: false,
    errors: null,
    next_of_kins: null,
}
const getters = {
    getLoading(state) {
        return state.loading
    },
    getNextOfKin(state) {
        return state.next_of_kins
    }
}

const mutations = {
    setLoading(state, payload) {
        state.loading = payload
    },
    setNextOfKin(state, payload) {
        state.next_of_kins = payload
    },
    setErrors(state, payload) {
        state.errors = payload
    }
}

const actions = {
    _get_next_of_kin({commit}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.get('/next-of-kin/', {params: payload}).then(({data}) => {
                commit('setLoading', false)
                commit('app/setErrors', null, {root: true})
                commit('setNextOfKin', data)
                resolve(data)
            }).catch((error) => {
                commit('app/setErrors', error.response.data, {root: true})
                commit('setLoading', false)
                commit('app/setMsg', null, {root: true})
                reject(error.response.data)
            })
        })))
    },
    _post_next_of_kin({commit, dispatch}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.post('/next-of-kin/', payload).then(({data}) => {
                commit('setLoading', false)
                dispatch('_get_next_of_kin')
                commit('app/setErrors', null, {root: true})
                commit('setNextOfKin', data)
                resolve(data)
            }).catch((error) => {
                commit('app/setErrors', error.response.data, {root: true})
                commit('setLoading', false)
                commit('app/setMsg', null, {root: true})
                reject(error.response.data)
            })
        })))
    },
    _put_next_of_kin({commit, dispatch}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.put('/next-of-kin/' + payload.id, payload).then(({data}) => {
                commit('setLoading', false)
                commit('app/setErrors', null, {root: true})
                dispatch('_get_next_of_kin')
                commit('setNextOfKin', data)
                resolve(data)
            }).catch((error) => {
                commit('app/setErrors', error.response.data, {root: true})
                commit('setLoading', false)
                commit('app/setMsg', null, {root: true})
                reject(error.response.data)
            })
        })))
    },
    _delete_next_of_kin({commit, dispatch}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.delete('/next-of-kin/' + payload.id, payload).then(({data}) => {
                commit('setLoading', false)
                commit('app/setErrors', null, {root: true})
                dispatch('_get_next_of_kin')
                commit('setNextOfKin', data)
                resolve(data)
            }).catch((error) => {
                commit('app/setErrors', error.response.data, {root: true})
                commit('setLoading', false)
                commit('app/setMsg', null, {root: true})
                reject(error.response.data)
            })
        })))
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
