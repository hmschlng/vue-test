<template>
  <v-main>
    <video muted autoplay loop>
      <source src="@/assets/main.mp4" type="video/mp4" />
    </video>
    <v-overlay z-index="0">
      <v-col v-show="!isShow" align="center">
        <div class="text-h1 font-weight-bold">WHERE IS MY HOME</div>
        <v-btn color="success" @click="clickBtn" class="ma-8" x-large>
          매물 검색하러 가기
        </v-btn>
      </v-col>
      <house-search v-show="isShow"></house-search>
    </v-overlay>
  </v-main>
</template>

<script>
import HouseSearch from "@/components/layout/HouseSearch";
export default {
  name: "AppMain",
  components: {
    HouseSearch,
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    clickBtn() {
      this.isShow = true;
    },
  },
};
</script>

<style scoped>
  video {
    position: fixed;
    object-fit: fill;
  }
</style>