let mypageStore = {
    namespaced: true,
    state: {
      mypageTab: 0,
    },
    getters: {},
    mutations: {
      SET_MYPAGE_TAB(state, tab) {
        state.mypageTab = tab;
      },
    },
    actions: {},
  };
  
  export default mypageStore;