import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from "../views/auth/SignIn";
import SignUp from "../views/auth/SignUp";
import ResetPwd from "../views/auth/ResetPwd";
import ForgotPwd from "../views/auth/ForgotPwd";
import ActivateAccount from "../views/auth/ActivateAccount";
import Home from "../views/home/Home";
import Docs from "../views/home/Docs";
import AppIndex from "../views/auth/index"
import HomeIndex from "../views/home/index"
import PageNotFound from "../views/errors/PageNotFound";
import Forbidden from "../views/errors/Forbidden";
import Unauthorized from "../views/errors/Unauthorized";
import ServiceUnavailable from "../views/errors/ServiceUnavailable";
import AdminDashboard from "../views/admin/Dashboard";
import AdminIndex from '../views/admin/index'
import Department from "../views/admin/Department";
import PayrollDashboard from "../views/admin/PayrollDashboard";
import HrmDashboard from "../views/admin/HrmDashboard";
import Bank from "../views/admin/Bank";
import PersonnelGroup from "../views/admin/PersonnelGroup";
import Memo from "../views/admin/Memo";
import User from "../views/admin/users/User";
import UserBank from "../views/admin/users/UserBank";
import AllUsers from "../views/admin/users/AllUsers";
import UserDocs from "../views/admin/users/UserDocs";
import UserNextOfKin from "../views/admin/users/UserNextOfKin";
import Settings from "../views/admin/Settings";
import {isAuthenticated} from "../utils";
import store from '../store/index'
import Attendance from "../views/admin/Attendance";
import Business from "../views/admin/Business";
import BusinessAccount from "../views/admin/BusinessAccount";
import DeductionGroup from "../views/admin/DeductionGroup";
import EarningGroup from "../views/admin/EarningGroup";
import Period from "../views/admin/Period";
import SSR from "../views/admin/SSR";
import Tax from "../views/admin/Tax";
import WorkingDay from "../views/admin/WorkingDay";
import UserEarning from "../views/admin/users/UserEarning";
import UserAttendance from "../views/admin/users/UserAttendance";
import UserDeduction from "../views/admin/users/UserDeduction";
import UserLeave from "../views/admin/users/UserLeave";
import UserDailyRate from "../views/admin/users/UserDailyRate";
import Profile from "../views/admin/Profile";
import axios from "axios";
import Reports from "../views/admin/Reports";
import PayrollReport from "../views/admin/reports/PayrollReport";
import PayslipReport from "../views/admin/reports/PayslipReport";
import AttendanceReport from "../views/admin/reports/AttendanceReport";
import DeductionsReport from "../views/admin/reports/DeductionsReport";
import LeavesReport from "../views/admin/reports/LeavesReport";
import SsnitReport from "../views/admin/reports/SsnitReport";
import EarningsReport from "../views/admin/reports/EarningsReport";

Vue.use(VueRouter)

export const routes = [
    {
        path: '/app',
        redirect: 'app/sign-in',
        component: AppIndex,
        children: [
            {
                path: 'sign-in',
                name: 'SignIn',
                component: SignIn
            },
            {
                path: 'join',
                name: 'SignUp',
                component: SignUp
            },
            {
                path: 'reset-pwd',
                name: 'ResetPwd',
                component: ResetPwd
            },
            {
                path: 'forgot-pwd',
                name: 'ForgotPwd',
                component: ForgotPwd
            },
            {
                path: 'activate-account',
                name: 'ActivateAccount',
                component: ActivateAccount
            }
        ]
    },
    {
        path: '/',
        redirect: '/default',
        component: HomeIndex,
        children: [
            {
                path: 'default',
                name: 'Home',
                component: Home
            },
            {
                path: 'docs',
                name: 'Docs',
                component: Docs
            }
        ]
    },
    {
        path: '/yine',
        name: 'admin_index',
        redirect: 'yine/dashboard',
        component: AdminIndex,

        children: [
            {path: 'dashboard', name: 'admin_dashboard', component: AdminDashboard, meta: {loginRequired: true},},
            {
                path: 'dashboard/payroll',
                name: 'admin_dashboard_payroll',
                component: PayrollDashboard,
                meta: {loginRequired: true},
            },
            {path: 'dashboard/hrm', name: 'admin_dashboard_hrm', component: HrmDashboard, meta: {loginRequired: true},},
            {path: 'departments', name: 'department', component: Department, meta: {loginRequired: true},},
            {path: 'banks', name: 'bank', component: Bank, meta: {loginRequired: true},},
            {path: 'personnel-group', name: 'personnel-group', component: PersonnelGroup, meta: {loginRequired: true},},
            {path: 'settings', name: 'settings', component: Settings, meta: {loginRequired: true},},
            {path: 'profile', name: 'profile', component: Profile, meta: {loginRequired: true}},
            {
                path: 'reports',
                name: 'reports',
                redirect: 'reports/payroll',
                component: Reports,
                meta: {loginRequired: true},
                children: [
                    {path: "payslip", name: "payslip-report", component: PayslipReport},
                    {path: "payroll", name: "payroll-report", component: PayrollReport},
                    {path: "earning", name: "earning-report", component: EarningsReport},
                    {path: "attendance", name: "attendance-report", component: AttendanceReport},
                    {path: "deduction", name: "deduction-report", component: DeductionsReport},
                    {path: "leaves", name: "leaves-report", component: LeavesReport},
                    {path: "ssnit", name: "ssnit-report", component: SsnitReport},
                ]
            },
            {path: 'memos', name: 'memo', component: Memo, meta: {loginRequired: true},},
            {
                path: 'users', name: 'user', component: User, redirect: 'users/all',
                children: [
                    {path: 'all', name: 'user-all', component: AllUsers, meta: {loginRequired: true},},
                    {path: 'bank', name: 'user-bank', component: UserBank, meta: {loginRequired: true},},
                    {path: 'docs', name: 'user-docs', component: UserDocs, meta: {loginRequired: true},},
                    {path: 'next-of-kin', name: 'next-of-kin', component: UserNextOfKin, meta: {loginRequired: true},},
                    //new
                    {path: 'daily-rate', name: 'daily_rate', component: UserDailyRate, meta: {loginRequired: true},},
                    {path: 'earnings', name: 'earnings', component: UserEarning, meta: {loginRequired: true},},
                    {
                        path: 'attendance',
                        name: 'user_attendance',
                        component: UserAttendance,
                        meta: {loginRequired: true},
                    },
                    {path: 'deductions', name: 'deductions', component: UserDeduction, meta: {loginRequired: true},},
                    {path: 'leaves', name: 'leaves', component: UserLeave, meta: {loginRequired: true},},
                ]
            },
            //new
            {path: 'attendance', name: 'attendance', component: Attendance, meta: {loginRequired: true},},
            {path: 'business', name: 'business', component: Business, meta: {loginRequired: true},},
            {
                path: 'business-accounts',
                name: 'business-accounts',
                component: BusinessAccount,
                meta: {loginRequired: true},
            },
            {path: 'deduction-group', name: 'deduction-group', component: DeductionGroup, meta: {loginRequired: true},},
            {path: 'earning-group', name: 'earning-group', component: EarningGroup, meta: {loginRequired: true},},
            {path: 'period', name: 'period', component: Period, meta: {loginRequired: true},},
            {path: 'ssr', name: 'ssr', component: SSR, meta: {loginRequired: true},},
            {path: 'tax', name: 'tax', component: Tax, meta: {loginRequired: true},},
            {path: 'working-days', name: 'working-days', component: WorkingDay, meta: {loginRequired: true},},
        ]
    },
    {
        path: '*',
        name: 'PageNotFound',
        component: PageNotFound
    },
    {
        path: '/forbidden',
        name: 'Forbidden',
        component: Forbidden
    },
    {
        path: '/unauthorized',
        name: 'Unauthorized',
        component: Unauthorized
    },
    {
        path: '/maintenance',
        name: 'ServiceUnavailable',
        component: ServiceUnavailable
    },

]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {

    const {loginRequired} = to.meta;
    if (loginRequired && !isAuthenticated()) {
        Vue.prototype.$message.error('You have to login to access this page')
        return next({name: 'SignIn', query: {return: to.path}})
    }
    store.dispatch('app/_loading', true)
    next()
})

router.afterEach(() => {
    store.dispatch('app/_loading', false)
})


axios.interceptors.request.use((config) => {

    if (store.state.business.currentBs?.id && store.state['auth'].loggedIn) {
        if (!config.url.includes('business'))
            config.params = {...config.params, 'selector': store.state.business.currentBs.id}
    }
    return config
}, error => {
    return Promise.reject(error)
})


export default router
