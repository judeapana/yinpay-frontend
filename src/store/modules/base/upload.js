import axios from "axios";

const state = {
    loading: false,
    errors: null,
}
const getters = {
    getErrors(state) {
        return state.errors
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
    }
}

const actions = {
    _post_upload_img({commit}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.post(`/upload/img/${payload.id}`, payload.img, {
                params: {loc: payload.loc},
                headers: {'Content-Type': 'multipart/form-data'}
            }).then(({data}) => {
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
    _put_upload_img({commit}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.put(`/upload/img/${payload.id}`, payload.img, {
                params: {loc: payload.loc},
                headers: {'Content-Type': 'multipart/form-data'}
            }).then(({data}) => {
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
    _post_upload_file({commit}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.post(`/upload/file/${payload.id}`, payload.file, {
                params: {loc: payload.loc},
                headers: {'Content-Type': 'multipart/form-data'}
            }).then(({data}) => {
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
    }, _put_upload_file({commit}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.put(`/upload/file/${payload.id}`, payload.file, {
                params: {loc: payload.loc},
                headers: {'Content-Type': 'multipart/form-data'}
            }).then(({data}) => {
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


}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
