import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pageTitle: 'Page Title',
  },
  getters: {
    getPageTitle(state) {
      return state.pageTitle;
    },
  },
  mutations: {
    setPageTitle(state, title) {
      state.pageTitle = title;
    },
  },
  actions: {
    setPageTitle({
      commit,
      // state,
    }, title) {
      commit('setPageTitle', title);
    },
  },
});
