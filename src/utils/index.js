import axios from "axios";
import store from '../store/index'
import jwt_decode from 'jwt-decode'
import Vue from 'vue'

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
    store.commit('auth/setLoggedIn', false)
    localStorage.clear()
}

export const setAuthHeader = (payload) => {
    axios.defaults.headers['Authorization'] = `Bearer ${payload}`
}

let subscribers = []

export function addSubscriber(callback) {
    subscribers.push(callback)
}

// export const AuthInterceptor = () => {
axios.interceptors.response.use(response => {
    return response
}, error => {
    const originalRequest = config
    const {config, response: {status}} = error;
    if (status === 401) {
        if (getRefreshToken()) {
            setAuthHeader(getRefreshToken())
            store.dispatch('auth/_refresh').then((data) => {
                setToken(data)
                return axios(config)
            }).catch(() => {
                store.dispatch('auth/_logout')
                Vue.prototype.$router.push({name: 'Login'})
                Promise.reject();
            })

            return new Promise((resolve) => {
                addSubscriber(access_token => {
                    originalRequest.headers.Authorization = 'Bearer ' + access_token
                    resolve(axios(originalRequest))
                })
            })
        }
        return Promise.reject(error)
    }
    return Promise.reject(error)
})
// }


axios.interceptors.request.use((config) => {
    if (isAuthenticated)
        config.params = {...config.params, 'selector': store.state.business.currentBs.id}
    return config
})


