import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueWorkers from 'vue-worker'
import VueAxios from "vue-axios";
import VCountryRegionSelect from '@timbouc/vuetify-country-region-input'


import Antd from 'ant-design-vue';

Vue.use(Antd);

Vue.config.productionTip = false
Vue.use(VueWorkers, 'vue-workers')
Vue.use(VCountryRegionSelect)
Vue.use(VueAxios)

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
