<template>
  <v-btn-toggle id="locationSelect" group dense>
    <!-- 시도 선택 메뉴 -->
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn id="menuBtn"
          v-bind="attrs"
          v-on="on"
        >
          {{ currentSido.name }}
        </v-btn>
      </template>
      <!-- 리스트 -->
      <v-list style="height:400px; overflow-y: scroll;">
        <v-list-item v-for="(sido, index) in sidoList" :key="index">
          <v-btn depressed text @click="getGugunList(sido)">
            {{ sido.name }}
          </v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
    <!-- 시군구 선택 메뉴 -->
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn id="menuBtn"
          v-bind="attrs"
          v-on="on"
        >
          {{ currentGugun.name }}
        </v-btn>
      </template>
      <!-- 리스트 -->
      <v-list style="height:400px; overflow-y: scroll;">
        <v-list-item v-for="(gugun, index) in gugunList" :key="index">
          <v-btn depressed text @click="getDongList(gugun)">
            {{ gugun.name }}
          </v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
    <!-- 동 선택 메뉴 -->
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn id="menuBtn"
          v-bind="attrs"
          v-on="on"
        >
          {{ currentDong.name }}
        </v-btn>
      </template>
      <!-- 리스트 -->
      <v-list style="height:400px; overflow-y: scroll;">
        <v-list-item v-for="(dong, index) in dongList" :key="index">
          <v-btn depressed text @click="setCurrentDong(dong)">
            {{ dong.name }}
          </v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
    <!-- 날짜 선택 메뉴 -->
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn id="menuBtn"
          v-bind="attrs"
          v-on="on"
        >
          {{ date }}
        </v-btn>
      </template>
      <v-date-picker id="monthPicker"
        color="grey lighten-1"
        elevation="4"
        type="month"
        v-model="date"
        :picker-date.sync="date"
      ></v-date-picker>
    </v-menu>
    <div style="width: 5%"></div>
    <v-btn id="menuBtn" @click="restoreSelected"><v-icon>mdi-refresh</v-icon></v-btn>
    <v-btn id="menuBtn" @click="getAptListBySelect">결과 조회</v-btn>
  </v-btn-toggle>
</template>

<script>

export default {
  name: "LoactionSelect",
  data() {
    return {
      sidoList: [],
      gugunList: [],
      dongList: [],
      currentSido: { name: "시도", code: "-1", },
      currentGugun: { name: "시/군/구", code: "-1", },
      currentDong: { name: "동", code: "-1", },
      date: null,
      aptList: [],
    }
  },
  created() {
    this.date = new Date().toISOString().substring(0, 7);
  },
  async mounted() {
    this.getSidoList();
  },
  methods: {
    async getSidoList() {
      console.log("mounted");
      // 기존에 있었던 검색 결과들은 초기화
      if (this.$store.state.aptSearchStore.aptList) {
        this.$store.state.aptSearchStore.aptList = [];
        this.aptList = [];
      }
      console.log("created");
      await this.$store.dispatch("getSidoList");
      this.sidoList = this.$store.state.aptSearchStore.sidoList;
    },

    async getGugunList(sido) {
      this.currentSido = sido;
      await this.$store.dispatch("getGugunList", sido.code);
      this.gugunList = this.$store.state.aptSearchStore.gugunList;
    }, 

    async getDongList(gugun) {
      this.currentGugun = gugun;
      await this.$store.dispatch("getDongList", gugun.code);
      this.dongList = this.$store.state.aptSearchStore.dongList;
    },

    setCurrentDong(dong) {
      this.currentDong = dong;
    },

    restoreSelected() {
      if (window.confirm("선택한 지역을 초기화하시겠습니까?")) {
        this.currentSido.name = "시도";
        this.currentGugun.name = "시/군/구";
        this.currentDong.name = "동";
        this.gugunList = [];
        this.dongList = [];
        this.date = new Date().toISOString().substring(0, 7);
        this.getSidoList();
      } else {
        return;
      }
    },

    async getAptListBySelect() {
      // 기존에 있었던 검색 결과들은 초기화
      if (this.$store.state.aptSearchStore.aptList) {
        this.$store.state.aptSearchStore.aptList = [];
        this.aptList = [];
      }
      let yearMonth = this.date.replace("-","");
      // 시도는 필수적으로 선택하도록 함
      if (!this.currentSido) {
        alert("시도를 먼저 선택해주세요.");
      } else {
        if (!this.currentDong) {
          // 동이 선택되어 있지 않으면 구군까지로 검색
          await this.$store.dispatch("getAptListBySelect", { code: this.currentGugun.code, yearMonth });
        } else {
          // 동이 선택되어 있다면 동 단위로 검색
          await this.$store.dispatch("getAptListBySelect", { code: this.currentDong.code, yearMonth });
        }
      }
      console.log("dispatch complete!!");
      this.$store.commit("SET_CURRENT_LOCATION", { loc: this.currentSido.name + " " + this.currentGugun.name + " " + this.currentDong.name });
      this.aptList = this.$store.state.aptSearchStore.aptList;
    }
  },
};
</script>

<style scoped>
#locationSelect {
  width: 40%;
}
#menuBtn {
  border: 1px solid gainsboro;
  border-radius: 5px;
}
#monthPicker {
  height: 400px;
}
</style>