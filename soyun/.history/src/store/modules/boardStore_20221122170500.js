let boardStore = {
  namespaced: true,
  state: {
    communityTab: 0,
    searchOptions: [],
    searc
    pageSize: 10,
    pgno: 1,
    keyword: null,
  },
  getters: {},
  mutations: {
    SET_COMMUNITY_TAB(state, tab) {
      state.communityTab = tab;
    },
    SET_SEARCH_OPTIONS(state, options) {
      state.searchOptions = options;
    },
  },
  actions: {
    async getCommunityList(context) { 

    }
  },
};

export default boardStore;
