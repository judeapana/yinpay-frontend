import axios from "axios";

const state = {
    loading: false,
    errors: null,
    msg: null,
    currentBs: null,
}
const getters = {
    getLoading(state) {
        return state.loading
    },
    getErrors(state) {
        return state.errors
    },
    getMsg(state) {
        return state.msg
    },
    getCurrentBs(state) {
        return state.currentBs
    }
}

const mutations = {
    setLoading(state, payload) {
        state.loading = payload
    },
    setErrors(state, payload) {
        state.errors = payload
    },
    setMsg(state, payload) {
        state.msg = payload
    },
    setCurrentBs(state, payload) {
        state.currentBs = payload
    }
}

const actions = {
    setBusiness({commit, dispatch}, payload) {
        commit('setCurrentBs', payload)
        commit('app/setMsg', {message: `Your Business Account has been Changed to ${payload.name}`}, {root: true})
        dispatch('user/_get_user', {}, {root: true})
    },
    _getBusiness({commit}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.get('/business/', {params: payload}).then(({data}) => {
                commit('setLoading', false)
                commit('app/setErrors', null, {root: true})
                resolve(data)
            }).catch((error) => {
                commit('app/setErrors', error.response.data, {root: true})
                commit('setLoading', false)
                commit('app/setMsg', null, {root: true})
                reject(error.response)
            })
        })))
    },
    _postBusiness({commit}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.post('/business/', payload).then(({data}) => {
                commit('app/setMsg', data, {root: true})
                commit('setLoading', false)
                commit('app/setErrors', null, {root: true})
                commit('setMsg', {message: 'Business has been created successfully'})
                resolve(data)
            }).catch((error) => {
                commit('app/setErrors', error.response.data, {root: true})
                commit('setLoading', false)
                commit('app/setMsg', null, {root: true})
                reject(error.response.data)
            })
        })))
    },
    _updateBusiness({commit}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.put('/business/', payload).then(({data}) => {
                commit('app/setMsg', data, {root: true})
                commit('setLoading', false)
                commit('app/setErrors', null, {root: true})
                commit('setMsg', {message: 'Business has been updated'})
                resolve(data)
            }).catch((error) => {
                commit('app/setErrors', error.response.data, {root: true})
                commit('setLoading', false)
                commit('app/setMsg', null, {root: true})
                reject(error.response.data)
            })
        })))
    },
    _deleteBusiness({commit}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.delete('/business/', payload).then(({data}) => {
                commit('app/setMsg', data, {root: true})
                commit('setLoading', false)
                commit('app/setErrors', null, {root: true})
                commit('setMsg', {message: 'Business has been deleted'})
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
