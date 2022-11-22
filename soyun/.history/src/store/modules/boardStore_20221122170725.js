let boardStore = {
  namespaced: true,
  state: {
    searchOptions: [],
    categoryTab: null,
    pgno: 1,
    pageSize: 10,
    option: null,
    keyword: null,
  },
  getters: {},
  mutations: {
    SET_COMMUNITY_TAB(state, tab) {
      state.categoryTab = tab;
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
