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
    return localStorage.getItem('user') !== null;
}


export const getToken = () => {
    return localStorage.getItem('access_token') || null
}

export const getRefreshToken = () => {
    return localStorage.getItem('refresh_token');
}

export const setToken = (token) => {
    setCurrentUser(token?.access_token || null)
    localStorage.setItem('refresh_token', token?.refresh_token || null)
    localStorage.setItem('access_token', token?.access_token || null);
}

export const logoutUser = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('access_token')
}

export const setAuthHeader = (payload) => {
    axios.defaults.headers['Authorization'] = `Bearer ${payload}`
}

export const AuthInterceptor = () => {
    axios.interceptors.response.use(response => response, error => {
        const {config, response: {status}} = error;
        if (status === 401 && !config._retry) {
            config._retry = true;
            store.dispatch('auth/_refresh').then(({data}) => {
                setAuthHeader(data)
                return axios(config)
            }).catch(() => {
                store.dispatch('auth/_logout')
                Promise.reject();
            })
        }
    })
}


