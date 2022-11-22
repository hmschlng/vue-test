<template>
  <v-main>
    <!-- <v-row>
      <v-spacer />
      <v-col :cols="mainWidth">
        <the-banner></the-banner>
      </v-col>
      <v-spacer />
    </v-row> -->
  </v-main>
</template>

<script>
import TheBanner from "@/components/layout/TheBanner";

export default {
  name: "AppNews",
  components: {
    TheBanner,
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