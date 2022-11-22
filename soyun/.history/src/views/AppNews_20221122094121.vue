<template>
  <v-main>
    <!-- <v-row>
      <v-spacer />
      <v-col :cols="mainWidth">
        <the-banner></the-banner>
      </v-col>
      <v-spacer />
    </v-row> -->
    <house-detail></house-detail>
  </v-main>
</template>

<script>
// import TheBanner from "@/components/layout/TheBanner";
import HouseDetail from "@/components/house/HouseDetail";

export default {
  name: "AppNews",
  components: {
    // TheBanner,
    HouseDetail,
  },
  data() {
    return {
      mainWidth: this.$store.state.mainStore.mainWidth,
    };
  },
};
</script>

<style>
</style>