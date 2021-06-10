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
import UserTin from "../views/admin/users/UserTin";
import UserSsn from "../views/admin/users/UserSsn";
import UserDocs from "../views/admin/users/UserDocs";
import UserSpouse from "../views/admin/users/UserSpouse";
import UserPosition from "../views/admin/users/UserPosition";
import UserAssoc from "../views/admin/users/UserAssoc";
import UserNextOfKin from "../views/admin/users/UserNextOfKin";
import Settings from "../views/admin/Settings";
import {isAuthenticated} from "../utils";
import store from '../store/index'

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
            {path: 'memos', name: 'memo', component: Memo, meta: {loginRequired: true},},
            {
                path: 'users', name: 'user', component: User, redirect: 'users/all',
                children: [
                    {path: 'all', name: 'user-all', component: AllUsers, meta: {loginRequired: true},},
                    {path: 'bank', name: 'user-bank', component: UserBank, meta: {loginRequired: true},},
                    {path: 'tin', name: 'user-tin', component: UserTin, meta: {loginRequired: true},},
                    {path: 'ssn', name: 'user-ssn', component: UserSsn, meta: {loginRequired: true},},
                    {path: 'docs', name: 'user-docs', component: UserDocs, meta: {loginRequired: true},},
                    {path: 'spouse', name: 'user-spouse', component: UserSpouse, meta: {loginRequired: true},},
                    {path: 'next-of-kin', name: 'next-of-kin', component: UserNextOfKin, meta: {loginRequired: true},},
                    {path: 'position', name: 'user-position', component: UserPosition, meta: {loginRequired: true},},
                    {path: 'assoc', name: 'user-assoc', component: UserAssoc, meta: {loginRequired: true},},
                ]
            }]
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

export default router
