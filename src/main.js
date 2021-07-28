import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'
import VueWorkers from 'vue-worker'
import axios from "axios";
import VueAxios from "vue-axios";
import VCountryRegionSelect from '@timbouc/vuetify-country-region-input'
import Antd from 'ant-design-vue';
import {getToken} from "./utils";
import store from './store/index'
import FormMixin from './utils/form.mixin'
import NProgress from 'vue-nprogress'
import VueHtmlToPaper from "vue-html-to-paper";

Vue.use(Antd)
Vue.config.productionTip = false
Vue.use(VueWorkers, 'vue-workers')
Vue.use(VCountryRegionSelect)
Vue.use(NProgress)

// axios.defaults.baseURL = ;
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'https://yinpay.herokuapp.com' : 'http://127.0.0.1:5000';
axios.defaults.headers['Authorization'] = `Bearer ${getToken()}`
Vue.use(VueAxios, axios)

const nprogress = new NProgress()
Vue.mixin(FormMixin)
const options = {
    styles: [
        "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900",
        "https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css",
        "https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css",
    ]
};
Vue.use(VueHtmlToPaper, options);
new Vue({
    nprogress,
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
