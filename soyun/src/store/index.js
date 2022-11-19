import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

// modul import
// import mainStore from "@/store/modules/mainStore";
// import boardStore from "@/store/modules/boardStore";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {
    mainWidth: 7,
    communityTab: 0,
    searchOptions: [],
  },
  getters: {
    // communityTab(state) {
    //   return state.communityTab;
    // },
  },
  mutations: {
    SET_COMMUNITY_TAB(state, tab) {
      state.communityTab = tab;
    },
    SET_SEARCH_OPTIONS(state, options) {
      state.searchOptions = options;
    },
  },
  modules: {
    // mainStore,
    // boardStore
  },
  plugins: [
    createPersistedState({
      // 브라우저 종료시 제거하기 위해 localStorage가 아닌 sessionStorage로 변경. (default: localStorage)
      storage: sessionStorage,
    }),
  ],
});
