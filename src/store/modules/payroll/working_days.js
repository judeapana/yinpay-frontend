import axios from "axios";

const state = {
    loading: false,
    errors: null,
    working_days: null
}
const getters = {
    getWorkingDays(state) {
        return state.working_days
    },
    getLoading(state) {
        return state.loading
    }
}

const mutations = {
    setLoading(state, payload) {
        state.loading = payload
    },
    setErrors(state, payload) {
        state.errors = payload
    },
    setWorkingDays(state, payload) {
        state.working_days = payload
    }
}

const actions = {
    _get_working_days({commit}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.get('/working-day/', {params: payload}).then(({data}) => {
                commit('setLoading', false)
                commit('app/setErrors', null, {root: true})
                commit('setWorkingDays', data)
                resolve(data)
            }).catch((error) => {
                commit('app/setErrors', error.response.data, {root: true})
                commit('setLoading', false)
                commit('app/setMsg', null, {root: true})
                reject(error.response.data)
            })
        })))
    },
    _post_working_days({commit, dispatch}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.post('/working-day/', payload).then(({data}) => {
                commit('setLoading', false)
                dispatch('_get_working_days')
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
    _put_working_days({commit, dispatch}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.put('/working-day/' + payload.id, payload).then(({data}) => {
                commit('setLoading', false)
                commit('app/setErrors', null, {root: true})
                dispatch('_get_working_days')
                commit('app/setMsg', {message: 'Working days has been updated'}, {root: true})
                resolve(data)
            }).catch((error) => {
                commit('app/setErrors', error.response.data, {root: true})
                commit('setLoading', false)
                commit('app/setMsg', null, {root: true})
                reject(error.response.data)
            })
        })))
    },
    _delete_working_days({commit, dispatch}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.delete('/working-day/' + payload.id, payload).then(({data}) => {
                commit('setLoading', false)
                commit('app/setErrors', null, {root: true})
                dispatch('_get_working_days')
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
