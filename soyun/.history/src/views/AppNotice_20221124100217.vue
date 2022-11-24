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
        <router-view></router-view>
      </v-col>
      <v-spacer />
    </v-row>
    <the-footer></the-footer>
  </v-main>
</template>

<script>
import { mapMutations } from "vuex";
import SearchBar from "@/components/layout/SearchBar";
import TheFooter from "@/components/layout/TheFooter";

export default {
  name: "AppNotice",
  components: {
    SearchBar,
    TheFooter,
  },
  data() {
    return {
      mainWidth: this.$store.state.mainStore.mainWidth,
      options: [
        {
          text: "제목",
          value: "title",
        },
        {
          text: "내용",
          value: "contents",
        },
      ],
    };
  },
  methods: {
    ...mapMutations("boardStore", ["SET_SEARCH_OPTIONS", "SET_CATEGORY_TAB", "SET_PGNO"]),
  clickPage() {
      this.SET_PGNO(this.page);
      this.$router.go({
        name: "boardlist",
      });
    },
  },
  created() {
    this.SET_SEARCH_OPTIONS(this.options);
    this.SET_CATEGORY_TAB(2);
  },
};
</script>

<style>
#noticeTab {
  background-image: url("@/assets/notice.png");
  background-size: cover;
}
</style>