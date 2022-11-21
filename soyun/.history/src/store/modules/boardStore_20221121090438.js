let boardStore = {
  namespaced: true,
  state: {
    communityTab: 0,
    helpcenterTab: 0,
    searchOptions: [],
  },
  getters: {},
  mutations: {
    SET_COMMUNITY_TAB(state, tab) {
      state.communityTab = tab;
    },
    SET_HELPCENTER_TAB(state, tab) {
      state.helpcenterTab = tab;
    },
    SET_SEARCH_OPTIONS(state, options) {
      state.searchOptions = options;
    },
  },
  actions: {},
};

export default boardStore;
