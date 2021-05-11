import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from "../views/auth/SignIn";
import SignUp from "../views/auth/SignUp";
import ResetPwd from "../views/auth/ResetPwd";
import ForgotPwd from "../views/auth/ForgotPwd";
import ActivateAccount from "../views/auth/ActivateAccount";
import CompleteActivation from "../views/auth/CompleteActivation";
import Home from "../views/home/Home";
import Docs from "../views/home/Docs";
import AppIndex from "../views/auth/index"
import HomeIndex from "../views/home/index"
import PageNotFound from "../views/errors/PageNotFound";
import Forbidden from "../views/errors/Forbidden";
import Unauthorized from "../views/errors/Unauthorized";
import ServiceUnavailable from "../views/errors/ServiceUnavailable";
import Kyc from "../views/auth/Kyc";
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

Vue.use(VueRouter)

const routes = [
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
            },
            {
                path: 'kyc',
                name: 'Kyc',
                component: Kyc
            },
            {
                path: 'complete-activation',
                name: 'CompleteActivation',
                component: CompleteActivation
            },
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
            {path: 'dashboard', name: 'admin_dashboard', component: AdminDashboard},
            {path: 'dashboard/payroll', name: 'admin_dashboard_payroll', component: PayrollDashboard},
            {path: 'dashboard/hrm', name: 'admin_dashboard_hrm', component: HrmDashboard},
            {path: 'departments', name: 'department', component: Department},
            {path: 'banks', name: 'bank', component: Bank},
            {path: 'personnel-group', name: 'personnel-group', component: PersonnelGroup},
            {path: 'memos', name: 'memo', component: Memo},
            {
                path: 'users', name: 'user', component: User, redirect: 'users/all',
                children: [
                    {path: 'all', name: 'user-all', component: AllUsers},
                    {path: 'bank', name: 'user-bank', component: UserBank},
                    {path: 'tin', name: 'user-tin', component: UserTin},
                    {path: 'ssn', name: 'user-ssn', component: UserSsn},
                    {path: 'docs', name: 'user-docs', component: UserDocs},
                    {path: 'spouse', name: 'user-spouse', component: UserSpouse},
                    {path: 'next-of-kin', name: 'next-of-kin', component: UserNextOfKin},
                    {path: 'position', name: 'user-position', component: UserPosition},
                    {path: 'assoc', name: 'user-assoc', component: UserAssoc},
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

export default router
