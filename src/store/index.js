import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from "./modules/auth/auth";
import business from "./modules/base/business";
import upload from "./modules/base/upload";
import app from "./modules/app";
import user from './modules/users/user'
import bank_detail from "./modules/hrm/bank_detail";
import attendance from "./modules/hrm/attendance";
import next_of_kin from "./modules/hrm/next_of_kin";
Vue.use(Vuex)
export default new Vuex.Store({
    namespaced: false,
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {auth, business, upload, app, user, bank_detail, attendance,next_of_kin},
    plugins: [createPersistedState()]
})
