import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

// module import
import mainStore from "@/store/modules/mainStore";
import boardStore from "@/store/modules/boardStore";
import mypageStore from "@/store/modules/mypageStore";
import aptSearchStore from "@/store/modules/aptSearchStore";

Vue.use(Vuex);

let store = new Vuex.Store({
  namespaced: true,

  // 모듈 추가
  modules: {
    AptSearchStore,
    mainStore,
    boardStore,
    mypageStore
  },
  plugins: [
    createPersistedState({
      // 브라우저 종료시 제거하기 위해 localStorage가 아닌 sessionStorage로 변경. (default: localStorage)
      storage: sessionStorage,
    }),
  ],
});

export default store;
