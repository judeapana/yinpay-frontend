import axios from "axios";

const state = {
    loading: false,
    errors: null,
    msg: null,
    currentBs: null,
    bs: null
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
    },
    getCurrentBs(state) {
        return state.currentBs
    },
    getBs(state) {
        return state.bs
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
    },
    setCurrentBs(state, payload) {
        state.currentBs = payload
    },
    setBs(state, payload) {
        state.bs = payload
    }
}

const actions = {
    setBusiness({commit, dispatch}, payload) {
        commit('setCurrentBs', payload)
        Promise.all([
            dispatch('user/_get_user', {}, {root: true}),
            dispatch('business/_getBusiness', {}, {root: true}),
            dispatch('business_account/_get_business_account', {}, {root: true}),
            dispatch('attendance/_get_attendance', {}, {root: true}),
            dispatch('bank/_get_bank', {}, {root: true}),
            dispatch('bank_detail/_get_bank_details', {}, {root: true}),
            dispatch('department/_get_department', {}, {root: true}),
            dispatch('docs/_get_docs', {}, {root: true}),
            dispatch('leave/_get_leaves', {}, {root: true}),
            dispatch('memo/_get_memo', {}, {root: true}),
            dispatch('next_of_kin/_get_next_of_kin', {}, {root: true}),
            dispatch('personnel_group/_get_personnel_group', {}, {root: true}),
            dispatch('daily_rate/_get_daily_rate', {}, {root: true}),
            dispatch('deduction_group/_get_deduction_group', {}, {root: true}),
            dispatch('period/_get_period', {}, {root: true}),
            dispatch('ssr/_get_ssr', {}, {root: true}),
            dispatch('tax/_get_tax', {}, {root: true}),
            dispatch('user_attendance/_get_user_attendance', {}, {root: true}),
            dispatch('user_deduction/_get_user_deduction', {}, {root: true}),
            dispatch('user_earning/_get_user_earning', {}, {root: true}),
            dispatch('working_days/_get_working_days', {}, {root: true}),

        ]).then(() => {
            commit('app/setMsg', {message: `Your Business Account has been Changed to ${payload.name}`}, {root: true})
        }).catch(() => {
            commit('app/setErrors', {message: `Failed to has been Changed to ${payload.name}`}, {root: true})

        })
    },
    _getBusiness({commit}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.get('/business/', {params: payload}).then(({data}) => {
                commit('setLoading', false)
                commit('app/setErrors', null, {root: true})
                commit('setBs', data)
                resolve(data)
            }).catch((error) => {
                commit('app/setErrors', error.response.data, {root: true})
                commit('setLoading', false)
                commit('app/setMsg', null, {root: true})
                reject(error.response.data)
            })
        })))
    },
    _postBusiness({commit, dispatch}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {

            axios.post(`/business/`, payload).then(({data}) => {
                commit('app/setMsg', data, {root: true})
                commit('setLoading', false)
                commit('app/setErrors', null, {root: true})
                commit('setMsg', {message: 'Business has been created successfully'})
                dispatch('_getBusiness')
                resolve(data)
            }).catch((error) => {
                commit('app/setErrors', error.response.data, {root: true})
                commit('setLoading', false)
                commit('app/setMsg', null, {root: true})
                reject(error.response.data)
            })
        })))
    },
    _putBusiness({commit, dispatch}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.put(`/business/${payload.id}`, payload).then(({data}) => {
                commit('app/setMsg', data, {root: true})
                commit('setLoading', false)
                commit('app/setErrors', null, {root: true})
                commit('setMsg', {message: 'Business has been updated'})
                dispatch('_getBusiness')
                resolve(data)
            }).catch((error) => {
                commit('app/setErrors', error.response.data, {root: true})
                commit('setLoading', false)
                commit('app/setMsg', null, {root: true})
                reject(error.response.data)
            })
        })))
    },
    _deleteBusiness({commit}, payload) {
        commit('setLoading', true)
        commit('app/setErrors', null, {root: true})
        commit('app/setMsg', null, {root: true})
        return new Promise((((resolve, reject) => {
            axios.delete(`/business/${payload.id}`, payload).then(({data}) => {
                commit('app/setMsg', data, {root: true})
                commit('setLoading', false)
                commit('app/setErrors', null, {root: true})
                commit('setMsg', {message: 'Business has been deleted'})
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
