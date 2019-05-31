import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;
const corsAxios = axios.create({
  headers: {
    'Access-Control-Allow-Methods': 'GET,POST',
    // 'Referer': 'https://music.163.com/',
  },
});
Vue.prototype.axios = corsAxios;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
