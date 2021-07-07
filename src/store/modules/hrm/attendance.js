import axios from "axios";

const state = {
    loading: false,
    errors: null,
    user_attendance: null,
    attendance: null
}
const getters = {
    getUserAttendance(state) {
        return state.user_attendance
    },
    getLoading(state) {
        return state.loading
    },
}

const mutations = {
    setLoading(state, payload) {
        state.loading = payload
    },
    setErrors(state, payload) {
        state.errors = payload
    },
    setUserAttendance(state, payload) {
        state.user_attendance = payload
    }
}

const actions = {
    _get_attendance({commit}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.get('/attendance/', {params: payload}).then(({data}) => {
                commit('setLoading', false)
                commit('app/setErrors', null, {root: true})
                commit('setUserAttendance', data)
                resolve(data)
            }).catch((error) => {
                commit('app/setErrors', error.response.data, {root: true})
                commit('setLoading', false)
                commit('app/setMsg', null, {root: true})
                reject(error.response.data)
            })
        })))
    },
    _post_attendance({commit, dispatch}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.post('/attendance/', payload).then(({data}) => {
                commit('setLoading', false)
                dispatch('_get_attendance')
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
    _put_attendance({commit, dispatch}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.put('/attendance/' + payload.id, payload).then(({data}) => {
                commit('setLoading', false)
                dispatch('_get_attendance')
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
    _delete_attendance({commit, dispatch}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.delete('/attendance/' + payload.id, payload).then(({data}) => {
                commit('setLoading', false)
                dispatch('_get_attendance')
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

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
