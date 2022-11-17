import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mainWidth: 8,
    communityTab: null,
    options: []
  },
  getters: {
    mainWidth(state) { 
      return state.mainWidth;
    }
  },
  mutations: {
    SET_COMMUNITY_TAB (state, communityTab) {
      state.communityTab = communityTab;
    },
    SET_OPTIONS (state, options) {
      state.options = options;
    },
  },
  actions: {
  },
  modules: {},
  plugins: [
    createPersistedState({
      // 브라우저 종료시 제거하기 위해 localStorage가 아닌 sessionStorage로 변경. (default: localStorage)
      storage: sessionStorage,
    }),
  ],
  
})
