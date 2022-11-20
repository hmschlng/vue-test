<template>
  <v-main>
    <v-row>
      <v-spacer />
      <v-col :cols="mainWidth">
        <v-row>
          <v-col cols="4" class="pa-0">
            <mypage-sidebar></mypage-sidebar>
          </v-col>
          <v-col cols="8" class="pa-0">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-col>
      <v-spacer />
    </v-row>
  </v-main>
</template>

<script>
import MypageSidebar from "@/components/mypage/MypageSidebar";

export default {
  name: "AppMyPage",
  components: { MypageSidebar },
  data() {
    return {
      mainWidth: this.$store.state.mainStore.mainWidth + 1,
    };
  },
};
</script>

<style>
</style>