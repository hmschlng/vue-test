import axios from 'axios';

export default {
  state: {
    sidoList: [],
    gugunList: [],
    dongList: [],
    aptList: [],
    currentLocation: null,
  },
  mutations: {
    SET_SIDO(state, sidoList) {
      console.log("SET_SIDO called!!")
      let list = [];
      for (const sido of sidoList) {
        list.push(sido);
      }
      state.sidoList = list;
      console.log("state.sidoList ↓");
      console.dir(state.sidoList);
    },
    SET_GUGUN(state, gugunList) {
      console.log("SET_GUGUN called!!");
      let list = [];
      for (const gugun of gugunList) {
        list.push(gugun);
      }
      state.gugunList = list;
      console.log("state.gugunList ↓");
      console.dir(state.gugunList);
    },
    SET_DONG(state, dongList) {
      console.log("SET_DONG called!!");
      let list = [];
      for (const dong of dongList) {
        list.push(dong);
      }
      state.dongList = list;
      console.log("state.dongList ↓");
      console.dir(state.dongList);
    },
    SET_APT_LIST(state, aptList) {
      console.log("SET_APT_LIST called!!");
      let list = [];
      for (const apt of aptList) {
        list.push(apt);
      }
      state.aptList = list;
      console.log("state.aptList ↓");
      console.dir(state.aptList);
    },
    SET_CURRENT_LOCATION(state, location) {
      state.currentLocation = location;
    },
  },
  actions: {
    async getSidoList(context) {
      console.log("getSidoList called!!");
      await axios.get(`${process.env.VUE_APP_BACKEND_SERVER_URL}/house/sido`)
        .then(({ data }) => {
          console.log("sido data is arrived!");
          context.commit("SET_SIDO", data);
        });
    },
    async getGugunList(context, sidoCode) {
      console.log("getGugunList called!!");
      console.log("param sido: ", sidoCode);
      await axios.get(`${process.env.VUE_APP_BACKEND_SERVER_URL}/house/gugun/${sidoCode}`)
        .then(({ data }) => {
          console.log("gugun data is arrived!");
          context.commit("SET_GUGUN", data);
        });
    },
    async getDongList(context, gugunCode) {
      console.log("getDongList called!!");
      console.log("param gugun: ", gugunCode);
      await axios.get(`${process.env.VUE_APP_BACKEND_SERVER_URL}/house/dong/${gugunCode}`)
        .then(({ data }) => {
          console.log("dong data is arrived!");
          context.commit("SET_DONG", data);
        });
    },
    async getAptListBySelect(context, param) {
      console.log("getAptListBySelect called!!");
      console.log("param code: ", param.code);
      console.log("param date: ", param.yearMonth);
      await axios.get(`${process.env.VUE_APP_BACKEND_SERVER_URL}/house/apt/${param.code}/${param.yearMonth}`)
        .then(({ data }) => {
          console.log("apt list arrived!");
          context.commit("SET_APT_LIST", data);
        });
    },
  },
};
