import axios from 'axios';

let boardStore = {
  namespaced: true,
  state: {
    boardList: [],
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
    SET_BOARD_LIST(state, boardList) {
      state.boardList = boardList;
    },
  },
  actions: {
    async getBoardList(context) { 
      await axios.get(`${process.env.VUE_APP_BACKEND_SERVER_URL}/board/${state.categoryTab}/${state.pgno}/${state.pageSize}`)
        .then(({ data }) => { 
          context.commit("SET_BOARD_LIST", data);
        });
    },
    async searchArticles(context) { 
      await axios.get(`${process.env.VUE_APP_BACKEND_SERVER_URL}/board/${state.categoryTab}/${state.pgno}/${state.pageSize}/${state.}`)
        .then(({ data }) => { 
          context.commit("SET_BOARD_LIST", data);
        });
    },
  },
};

export default boardStore;
