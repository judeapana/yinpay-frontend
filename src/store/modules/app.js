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
    _loading({commit}, payload) {
        commit('setLoading', payload)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
