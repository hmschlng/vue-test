let boardStore = {
  namespaced: true,
  state: {
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
  actions: {},
};

export default boardStore;
