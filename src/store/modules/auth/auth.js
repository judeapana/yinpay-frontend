const state = {
    loading: false,
    errors: [],
}

const getters = {
    getLoading(state) {
        return state.loading
    },
    getErrors(state) {
        return state.errors
    }
}

const mutations = {
    setLoading(state, payload) {
        state.loading = payload
    },
    setErrors(state, payload) {
        state.errors = payload
    },

}

const actions = {}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
