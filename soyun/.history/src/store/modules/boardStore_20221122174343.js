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
    pageLength: 1,
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
    SET_PAGE_LENGTH(state, pageLength) {
      state.pageLength = pageLength;
    },
  },
  actions: {
    async getBoardList(context) { 
      await axios.get(`${process.env.VUE_APP_BACKEND_SERVER_URL}/board/${this.state.categoryTab}/${this.state.pgno}/${this.state.pageSize}`)
        .then(({ data }) => { 
          context.commit("SET_PAGE_LENGTH", data.pageLength);
          context.commit("SET_BOARD_LIST", data.list);
        });
    },
    async searchArticles(context) { 
      await axios.get(`${process.env.VUE_APP_BACKEND_SERVER_URL}/board/${this.state.categoryTab}/${this.state.pgno}/${this.state.pageSize}/${this.state.option}/${this.state.keyword}`)
        .then(({ data }) => { 
          context.commit("SET_BOARD_LIST", data);
        });
    },
   
  },
};

export default boardStore;
