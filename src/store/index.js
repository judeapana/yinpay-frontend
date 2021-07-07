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
import docs from "./modules/hrm/docs";
import user_earning from "./modules/payroll/user.earning"
import user_deduction from "./modules/payroll/user.deduction"
import leave from "./modules/hrm/leave";
import daily_rate from "./modules/payroll/daily_rate";
import memo from "./modules/hrm/memo";
import department from "./modules/hrm/department";
import bank from "./modules/hrm/bank";
import business_account from "./modules/base/business_account";
import earning_group from "./modules/payroll/earning_group";
import deduction_group from "./modules/payroll/deduction_group";
import period from "./modules/payroll/period";
import tax from "./modules/payroll/tax";
import ssr from "./modules/payroll/ssr";
import working_days from "./modules/payroll/working_days";
import personnel_group from "./modules/hrm/personnel_group";
import user_attendance from './modules/payroll/user.attendance'

Vue.use(Vuex)
export default new Vuex.Store({
    namespaced: false,
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        auth,
        business,
        upload,
        app,
        user,
        bank_detail,
        attendance,
        next_of_kin,
        docs,
        user_earning,
        user_deduction,
        leave,
        ssr,
        tax, period,
        earning_group,
        deduction_group,
        daily_rate, memo,
        personnel_group,
        user_attendance,
        department, bank, business_account, working_days
    },
    plugins: [createPersistedState()]
})
