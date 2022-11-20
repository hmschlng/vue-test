import axios from 'axios';

export default {
  state: {
    sidoList: [],
    gugunList: [],
    dongList: [],
    yearMonth: "",
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
  },
  actions: {
    async getSidoList(context) {
      console.log("getSidoList called!!");
      await axios.get("//localhost:9999/house/sido")
        .then(({ data }) => {
          console.log("sido data is arrived!");
          context.commit("SET_SIDO", data);
        });
    },
    async getGugunList(context, sidoCode) {
      console.log("getGugunList called!!");
      console.log("param sido: ", sidoCode);
      await axios.get(`//localhost:9999/house/gugun/${sidoCode}`)
        .then(({ data }) => {
          console.log("gugun data is arrived!");
          context.commit("SET_GUGUN", data);
        });
    },
    async getDongList(context, gugunCode) {
      console.log("getDongList called!!");
      console.log("param gugun: ", gugunCode);
      await axios.get(`//localhost:9999/house/dong/${gugunCode}`)
        .then(({ data }) => {
          console.log("dong data is arrived!");
          context.commit("SET_DONG", data);
        });
    },
  },
};

// export function SET_SIDO(state, sidoList) {
//   console.log("SET_SIDO called!!")
//   let list = [];
//   for (const sido of sidoList) {
//     list.push(sido);
//   }
//   state.sidoList = list;
//   console.log("state.sidoList ↓");
//   console.dir(state.sidoList);
// }

// export function SET_GUGUN(state, gugunList) {
//   console.log("SET_GUGUN called!!");
//   let list = [];
//   for (const gugun of gugunList) {
//     list.push(gugun);
//   }
//   state.gugunList = list;
//   console.log("state.gugunList ↓");
//   console.dir(state.gugunList);
// }

// export function SET_DONG(state, dongList) {
//   console.log("SET_DONG called!!");
//   let list = [];
//   for (const dong of dongList) {
//     list.push(dong);
//   }
//   state.dongList = list;
//   console.log("state.dongList ↓");
//   console.dir(state.dongList);
// }

// export async function getSidoList(context) {
//   console.log("getSidoList called!!");
//   await axios.get("//localhost:9999/house/sido")
//     .then(({ data }) => {
//       console.log("sido data is arrived!");
//       context.commit("SET_SIDO", data);
//     });
// }

// export async function getGugunList(context, sidoCode) {
//   console.log("getGugunList called!!");
//   console.log("param sido: ", sidoCode);
//   await axios.get(`//localhost:9999/house/gugun/${sidoCode}`)
//     .then(({ data }) => {
//       console.log("gugun data is arrived!");
//       context.commit("SET_GUGUN", data);
//     });
// }

// export async function getDongList(context, gugunCode) {
//   console.log("getDongList called!!");
//   console.log("param gugun: ", gugunCode);
//   await axios.get(`//localhost:9999/house/dong/${gugunCode}`)
//     .then(({ data }) => {
//       console.log("dong data is arrived!");
//       context.commit("SET_DONG", data);
//     });
// }