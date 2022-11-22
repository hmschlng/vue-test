import axios from 'axios';

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
    SET_CATEGORY_TAB(state, tab) {
      state.categoryTab = tab;
    },
    SET_SEARCH_OPTIONS(state, options) {
      state.searchOptions = options;
    },
  },
  actions: {
    async getCommunityList(context) { 
      await axios.get();
    }
  },
};

export default boardStore;
