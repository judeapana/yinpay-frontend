import axios from "axios";
import {setToken} from "../../../utils";

const state = {
    loading: false,
    msg: [],
    errors: [],
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
    }
}

const actions = {
    // login to yinpay portal
    _auth({commit}, payload) {
        commit('setLoading', true)
        commit('setErrors', null)
        commit('setMsg', null)
        return new Promise(((resolve, reject) => {
            axios.post('/auth/', payload).then(({data}) => {
                commit('setErrors', null)
                commit('setMsg', {message: 'You have successfully Logged'})
                commit('setLoading', false)
                setToken(data)
                resolve(data)
            }).catch((error) => {
                commit('setMsg', null)
                commit('setErrors', error.response.data)
                commit('setLoading', false)
                reject(error.response.data)
            })
        }))
    },
    _activate_account({commit}, payload) {
        commit('setLoading', true)
        commit('setErrors', null)
        commit('setMsg', null)
        return new Promise((((resolve, reject) => {
            axios.put('/auth/activate-account', payload).then(({data}) => {
                commit('setLoading', false)
                commit('setErrors', null)
                commit('setMsg', data)
                resolve(data)
            }).catch((error) => {
                commit('setLoading', false)
                commit('setErrors', error.response.data)
                commit('setMsg', null)
                reject(error.response.data)
            })
        })))
    },
    _change_email({commit}, payload) {
        commit('setLoading', true)
        commit('setErrors', null)
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
        commit('setErrors', null)
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
        commit('setErrors', null)
        commit('setMsg', null)
        return new Promise((((resolve, reject) => {
            axios.post('/auth/forgot-pwd', payload).then(({data}) => {
                commit('setLoading', false)
                commit('setMsg', data)
                commit('setErrors', null)
                resolve(data)
            }).catch((error) => {
                commit('setErrors', error.response.data)
                commit('setLoading', false)
                commit('setMsg', null)
                reject(error.response.data)
            })
        })))
    },
    _logout({commit}, payload) {
        commit('setLoading', true)
        commit('setErrors', null)
        return new Promise((((resolve, reject) => {
            this.$http.put('/auth/logout', payload).then(({data}) => {
                resolve(data)
            }).catch((error) => {
                reject(error.response)
            })
        })))
    },
    _refresh({commit}, payload) {
        commit('setLoading', true)
        commit('setErrors', null)
        return new Promise((((resolve, reject) => {
            this.$http.post('/auth/refresh', payload).then(({data}) => {
                resolve(data)
            }).catch((error) => {
                reject(error.response)
            })
        })))
    },
    //register new user into yinpay
    _register({commit}, payload) {
        commit('setLoading', true)
        commit('setErrors', null)
        commit('setMsg', null)
        return new Promise((((resolve, reject) => {
            axios.post('/auth/register', payload).then(({data}) => {
                commit('setLoading', false)
                commit('setMsg', data)
                commit('setErrors', null)
                resolve(data)
            }).catch((error) => {
                commit('setErrors', error.response?.data || null)
                commit('setMsg', null)
                commit('setLoading', false)
                reject(error.response?.data || null)
            })
        })))
    },
    //post request to validate token of reset password
    _reset_pwd({commit}, payload) {
        commit('setLoading', true)
        commit('setErrors', null)
        commit('setMsg', null)
        return new Promise((((resolve, reject) => {
            axios.post('/auth/reset-pwd', payload).then(({data}) => {
                commit('setErrors', null)
                commit('setLoading', false)
                commit('setMsg', data)
                resolve(data)
            }).catch((error) => {
                commit('setMsg', null)
                commit('setLoading', false)
                commit('setErrors', error.response.data)
                reject(error.response.data)
            })
        })))
    },
    //put request to change password of account user
    _put_reset_pwd({commit}, payload) {
        commit('setLoading', true)
        commit('setErrors', null)
        commit('setMsg', null)
        return new Promise((((resolve, reject) => {
            axios.put('/auth/reset-pwd', payload).then(({data}) => {
                commit('setMsg', data)
                commit('setLoading', false)
                commit('setErrors', null)
                resolve(data)
            }).catch((error) => {
                commit('setMsg', null)
                commit('setLoading', false)
                commit('setErrors', error.response.data)
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
