<template>
  <v-btn-toggle group dense>
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
      date: "날짜",
    }
  },
  created() {
    this.date = new Date().toISOString().substring(0, 7);
  },
  async mounted() {
    console.log("created");
    await this.$store.dispatch("getSidoList");
    console.log("dispatch complete!!");
    this.sidoList = this.$store.state.AptSearchParams.sidoList;
    console.log("this.sidoList ↓");
    console.dir(this.sidoList);
    console.log("====================");
  },
  methods: {
    async getGugunList(sido) {
      console.log(`Button clicked!! -> (${sido.name})`);
      this.currentSido = sido;
      console.log(`sido button is changed to ${this.currentSido}!!`);
      await this.$store.dispatch("getGugunList", sido.code);
      console.log("dispatch complete!!");
      this.gugunList = this.$store.state.AptSearchParams.gugunList;
      console.log("this.gugunList ↓");
      console.dir(this.gugunList);
      console.log("====================");
    }, 

    async getDongList(gugun) {
      console.log(`Button clicked!! -> (${gugun.name})`);
      this.currentGugun = gugun;
      console.log(`gugun button is changed to ${this.currentGugun}!!`);
      await this.$store.dispatch("getDongList", gugun.code);
      console.log("dispatch complete!!");
      this.dongList = this.$store.state.AptSearchParams.dongList;
      console.log("this.dongList ↓");
      console.dir(this.dongList);
      console.log("====================");
    },

    setCurrentDong(dong) {
      this.currentDong = dong;
    }
  },
};
</script>

<style scoped>
#menuBtn {
  border: 1px solid gainsboro;
  border-radius: 5px;
}
#monthPicker {
  height: 400px;
}
</style>