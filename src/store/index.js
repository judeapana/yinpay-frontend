import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from "./modules/auth/auth";
import business from "./modules/base/business";
import upload from "./modules/base/upload";
import app from "./modules/app";

Vue.use(Vuex)
export default new Vuex.Store({
    namespaced: false,
    state: {},
    getters: {},
    mutations: {},
    actions: {

    },
    modules: {auth, business, upload, app},
    plugins: [createPersistedState()]
})
