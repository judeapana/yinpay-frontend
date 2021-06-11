import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'
import VueWorkers from 'vue-worker'
import axios from "axios";
import VueAxios from "vue-axios";
import VCountryRegionSelect from '@timbouc/vuetify-country-region-input'
import {message, Modal} from 'ant-design-vue';
import {getToken} from "./utils";
import store from './store/index'
import FormMixin from './utils/form.mixin'
import NProgress from 'vue-nprogress'


Vue.use(Modal)
Vue.prototype.$message = message
Vue.config.productionTip = false
Vue.use(VueWorkers, 'vue-workers')
Vue.use(VCountryRegionSelect)
Vue.use(VueAxios)
Vue.use(NProgress)

axios.defaults.baseURL = 'http://127.0.0.1:5000';
axios.defaults.headers['Authorization'] = `Bearer ${getToken()}`

const nprogress = new NProgress()
Vue.mixin(FormMixin)
new Vue({
    nprogress,
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
