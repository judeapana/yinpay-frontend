import axios from "axios";

const state = {
    loading: false,
    errors: null,
    ba: null
}
const getters = {
    getLoading(state) {
        return state.loading
    },
    getBa(state) {
        return state.ba
    }
}

const mutations = {
    setLoading(state, payload) {
        state.loading = payload
    },
    setErrors(state, payload) {
        state.errors = payload
    },
    setBa(state, payload) {
        state.ba = payload
    }
}

const actions = {
    _get_business_account({commit}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.get('/ba/', {params: payload}).then(({data}) => {
                commit('setLoading', false)
                commit('app/setErrors', null, {root: true})
                commit('setBa', data)
                resolve(data)
            }).catch((error) => {
                commit('app/setErrors', error.response.data, {root: true})
                commit('setLoading', false)
                commit('app/setMsg', null, {root: true})
                reject(error.response.data)
            })
        })))
    },
    _post_business_account({commit, dispatch}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.post('/ba/', payload).then(({data}) => {
                commit('setLoading', false)
                dispatch('_get_business_account')
                commit('app/setErrors', null, {root: true})
                resolve(data)
            }).catch((error) => {
                commit('app/setErrors', error.response.data, {root: true})
                commit('setLoading', false)
                commit('app/setMsg', null, {root: true})
                reject(error.response.data)
            })
        })))
    },
    _put_business_account({commit, dispatch}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.put('/ba/' + payload.id, payload).then(({data}) => {
                commit('setLoading', false)
                commit('app/setErrors', null, {root: true})
                dispatch('_get_business_account')
                resolve(data)
            }).catch((error) => {
                commit('app/setErrors', error.response.data, {root: true})
                commit('setLoading', false)
                commit('app/setMsg', null, {root: true})
                reject(error.response.data)
            })
        })))
    },
    _delete_business_account({commit, dispatch}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.delete('/ba/' + payload.id, payload).then(({data}) => {
                commit('setLoading', false)
                commit('app/setErrors', null, {root: true})
                dispatch('_get_business_account')
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
