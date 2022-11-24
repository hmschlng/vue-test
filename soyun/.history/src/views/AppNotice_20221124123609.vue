<template>
  <v-main>
    <v-card id="noticeTab">
      <v-card-title class="text-center justify-center py-10">
        <h1 class="font-weight-bold ma-5 white--text">공지사항</h1>
      </v-card-title>
    </v-card>
    <v-row class="mt-5">
      <v-spacer />
      <v-col :cols="mainWidth">
        <board-list></board-list>
      </v-col>
      <v-spacer />
    </v-row>
    <the-footer></the-footer>
  </v-main>
</template>

<script>
import TheFooter from "@/components/layout/TheFooter";
import BoardList from "@/components/board/BoardList";

export default {
  name: "AppNotice",
  components: {
    BoardList,
    TheFooter,
  },
  data() {
    return {
      mainWidth: this.$store.state.mainStore.mainWidth,
    };
  },
};
</script>

<style>
#noticeTab {
  background-image: url("@/assets/notice.png");
  background-size: cover;
}
</style>
