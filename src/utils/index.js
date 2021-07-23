import axios from "axios";
import store from '../store/index'
import jwt_decode from 'jwt-decode'

export const getCurrentUser = () => {
    try {
        return JSON.parse(localStorage.getItem('user'))
    } catch (e) {
        console.error("Something went wrong")
    }

}

export const setCurrentUser = (token) => {
    try {
        let usr = JSON.stringify(jwt_decode(token))
        localStorage.setItem('user', usr);
    } catch (e) {
        console.error("Something went wrong")
    }

}

export const isAuthenticated = () => {
    return store.getters["auth/getLoggedIn"]
}


export const getToken = () => {
    return localStorage.getItem('access_token') || null
}

export const getRefreshToken = () => {
    return localStorage.getItem('refresh_token');
}

export const setToken = (token) => {
    setAuthHeader(token?.access_token || null)
    setCurrentUser(token?.access_token || null)
    localStorage.setItem('refresh_token', token?.refresh_token || null)
    localStorage.setItem('access_token', token?.access_token || null);
}

export const logoutUser = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('access_token')
    localStorage.clear()
    store.commit('auth/setLoggedIn', false)
    store.commit('auth/setLoading', false)
}

export const setAuthHeader = (payload) => {
    axios.defaults.headers['Authorization'] = `Bearer ${payload}`
}





