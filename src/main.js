import ElementUI from 'element-ui';
import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';
import api from './request/api';

import 'element-ui/lib/theme-chalk/index.css';
// import '@/styles/index.scss'; // global css

Vue.use(ElementUI);
Vue.prototype.$api = api;
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
