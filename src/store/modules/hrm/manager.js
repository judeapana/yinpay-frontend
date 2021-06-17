const state = {
    loading: false,
    errors: null
}
const getters = {
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
    }
}

const actions = {}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
