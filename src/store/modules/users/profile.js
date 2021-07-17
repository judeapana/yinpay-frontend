import axios from "axios";

const state = {
    loading: false,
    errors: null,
    users: null
}
const getters = {
    getLoading(state) {
        return state.loading
    },
    getErrors(state) {
        return state.errors
    },
    getProfile(state) {
        return state.users
    }
}

const mutations = {
    setLoading(state, payload) {
        state.loading = payload
    },
    setErrors(state, payload) {
        state.errors = payload
    },
    setProfile(state, payload) {
        state.users = payload
    }
}

const actions = {
    _get_profile({commit}) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.get('/profile/').then(({data}) => {
                commit('setLoading', false)
                commit('setProfile', data)
                commit('app/setErrors', null, {root: true})
                resolve(data)
            }).catch((error) => {
                commit('app/setErrors', error.response.data, {root: true})
                commit('setProfile', null)
                commit('setLoading', false)
                commit('app/setMsg', null, {root: true})
                reject(error.response.data)
            })
        })))
    },
    _put_profile({commit}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.put(`/profile/`, payload).then(({data}) => {
                commit('setLoading', false)
                commit('setProfile', data)
                commit('app/setMsg', {message: 'Your profile bas been updated successfully'}, {root: true})
                commit('app/setErrors', null, {root: true})
                resolve(data)
            }).catch((error) => {
                commit('app/setErrors', error.response.data, {root: true})
                commit('setProfile', null)
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
