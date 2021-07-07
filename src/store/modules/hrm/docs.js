import axios from "axios";

const state = {
    loading: false,
    errors: null,
    docs: null
}
const getters = {
    getLoading(state) {
        return state.loading
    },
    getDocs(state) {
        return state.docs
    }
}

const mutations = {
    setLoading(state, payload) {
        state.loading = payload
    },
    setErrors(state, payload) {
        state.errors = payload
    },
    setDocs(state, payload) {
        state.docs = payload
    }
}

const actions = {
    _get_docs({commit}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.get('/user-doc/', {params: payload}).then(({data}) => {
                commit('setLoading', false)
                commit('app/setErrors', null, {root: true})
                commit('setDocs', data)
                resolve(data)
            }).catch((error) => {
                commit('app/setErrors', error.response.data, {root: true})
                commit('setLoading', false)
                commit('app/setMsg', null, {root: true})
                reject(error.response.data)
            })
        })))
    },
    _post_docs({commit, dispatch}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.post('/user-doc/', payload).then(({data}) => {
                commit('setLoading', false)
                dispatch('_get_docs')
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
    _put_docs({commit, dispatch}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.put('/user-doc/' + payload.id, payload).then(({data}) => {
                commit('setLoading', false)
                dispatch('_get_docs')
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
    _delete_docs({commit, dispatch}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.delete('/user-doc/' + payload.id, payload).then(({data}) => {
                commit('setLoading', false)
                dispatch('_get_docs')
                commit('app/setErrors', null, {root: true})
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
