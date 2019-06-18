import Vue from 'vue';
import {
  MdButton,
  MdApp,
  MdContent,
  MdDrawer,
  MdToolbar,
  MdIcon,
  MdList,
} from 'vue-material/dist/components';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';


Vue.config.productionTip = false;
Vue.use(MdButton)
  .use(MdApp)
  .use(MdContent)
  .use(MdDrawer)
  .use(MdList)
  .use(MdToolbar)
  .use(MdIcon);
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
