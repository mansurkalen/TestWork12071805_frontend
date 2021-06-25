import Vue from 'vue'
import { router } from './router';
import App from './App.vue';
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.prototype.$axios = axios
Vue.prototype.$axios.defaults.baseURL = process.env.VUE_APP_URL

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
