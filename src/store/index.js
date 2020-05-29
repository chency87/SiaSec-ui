import Vue from 'vue';
import Vuex from 'vuex';
import defaultSettings from '@/settings';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: !!localStorage.getItem('token'),
  },
  mutations: {
    setLoginState(state, bool) {
      state.isLogin = bool;
      // true 表示登录，false 表示注销
    },
  },
  actions: {

  },
  modules: {
    defaultSettings,
  },
});
