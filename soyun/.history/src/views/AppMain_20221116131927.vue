<template>
  <v-main>
    <video muted autoplay loop>
      <source src="@/assets/main.mp4" type="video/mp4" />
    </video>
    <v-container>
      <v-overlay z-index=0 >
          <v-btn v-show="!isShow" color="success" @click="a">
            매물	검색하러 가기
          </v-btn>
          <house-search v-show="isShow"></house-search>
      </v-overlay>
    </v-container>
  </v-main>
</template>

<script>
import HouseSearch from "@/components/layout/HouseSearch";
export default {
  name: "AppMain",
  components: {
    HouseSearch
  },
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    a(){
      this.isShow = true;
    }
  },
}
</script>

<style>

</style>