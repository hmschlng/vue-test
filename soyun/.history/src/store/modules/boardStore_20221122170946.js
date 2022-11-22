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
      await axios.get(`${process.env.VUE_APP_BACKEND_SERVER_URL}/board`)
        .then(({ data }) => { 
          context.commit();
        });
    }
  },
};

export default boardStore;
