import axios from "axios";
import {logoutUser, setToken} from "../../../utils";

const state = {
    loading: false,
    msg: [],
    errors: [],
    loggedIn: false,
}

const getters = {
    getLoading(state) {
        return state.loading
    },
    getLoggedIn(state) {
        return state.loggedIn
    },
}

const mutations = {
    setLoading(state, payload) {
        state.loading = payload
    },
    setLoggedIn(state, payload) {
        state.loggedIn = payload
    }
}

const actions = {
    _auth({commit}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise(((resolve, reject) => {
            axios.post('/auth/', payload).then(({data}) => {
                setToken(data)
                commit('setLoggedIn', true)
                commit('app/setErrors', null, {root: true})
                commit('app/setMsg', {message: 'You have successfully Logged'}, {root: true})
                commit('setLoading', false)
                resolve(data)
            }).catch((error) => {
                commit('app/setMsg', null, {root: true})
                commit('app/setErrors', error.response.data, {root: true})
                commit('setLoading', false)
                reject(false)
            })
        }))
    },
    //active your account before logging in
    _activate_account({commit}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.put('/auth/activate-account', payload).then(({data}) => {
                commit('setLoading', false)
                commit('setErrors', null, {root: true})
                commit('setMsg', data, {root: true})
                resolve(data)
            }).catch((error) => {
                commit('setLoading', false)
                commit('app/setErrors', error.response.data, {root: true})
                commit('app/setMsg', null, {root: true})
                reject(error.response.data)
            })
        })))
    },
    _change_email({commit}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        return new Promise((((resolve, reject) => {
            this.$http.post('/auth/change-email', payload).then(({data}) => {
                resolve(data)
            }).catch((error) => {
                reject(error.response)
            })
        })))
    },
    _put_change_email({commit}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        return new Promise((((resolve, reject) => {
            this.$http.put('/auth/change-email', payload).then(({data}) => {
                resolve(data)
            }).catch((error) => {
                reject(error.response)
            })
        })))
    },
    //request link to reset account password
    _forgot_pwd({commit}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.post('/auth/forgot-pwd', payload).then(({data}) => {
                commit('setLoading', false)
                commit('app/setMsg', data, {root: true})
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
    _logout({commit}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.post('/auth/logout', payload).then(({data}) => {
                commit('setLoggedIn', false)
                commit('app/setMsg', {message: 'Logged out'}, {root: true})
                commit('setLoading', false)
                commit('app/setErrors', null, {root: true})
                logoutUser()
                resolve(data)
            }).catch((error) => {
                commit('app/setErrors', error.response.data, {root: true})
                commit('setLoading', false)
                commit('app/setMsg', null, {root: true})
                logoutUser()
                reject(false)
            })
        })))
    },
    _refresh({commit}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.post('/auth/refresh', payload).then(({data}) => {
                commit('setLoading', false)
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
    //register new user into yinpay
    _register({commit}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.post('/auth/register', payload).then(({data}) => {
                commit('setLoading', false)
                commit('app/setMsg', data, {root: true})
                commit('app/setErrors', null, {root: true})
                resolve(data)
            }).catch((error) => {
                commit('app/setErrors', error.response?.data || null, {root: true})
                commit('app/setMsg', null, {root: true})
                commit('setLoading', false)
                reject(error.response?.data || null)
            })
        })))
    },
    //post request to validate token of reset password
    _reset_pwd({commit}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.post('/auth/reset-pwd', payload).then(({data}) => {
                commit('app/setErrors', null, {root: true})
                commit('setLoading', false)
                commit('app/setMsg', data, {root: true})
                resolve(data)
            }).catch((error) => {
                commit('app/setMsg', null, {root: true})
                commit('setLoading', false)
                commit('app/setErrors', error.response.data, {root: true})
                reject(error.response.data)
            })
        })))
    },
    //put request to change password of account user
    _put_reset_pwd({commit}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.put('/auth/reset-pwd', payload).then(({data}) => {
                commit('app/setMsg', data, {root: true})
                commit('setLoading', false)
                commit('app/setErrors', null, {root: true})
                resolve(data)
            }).catch((error) => {
                commit('app/setMsg', null, {root: true})
                commit('setLoading', false)
                commit('app/setErrors', error.response.data, {root: true})
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
