<template>
  <v-main>
    <the-banner></the-banner>
    <v-row class="mt-5">
      <v-spacer />
      <v-col :cols="mainWidth">
        <h1 class="text-center">부동산 뉴스</h1>
        <search-bar></search-bar>
        <board-list></board-list>
      </v-col>
      <v-spacer />
    </v-row>
  </v-main>
</template>

<script>
import BoardList from "@/components/board/BoardList";
import SearchBar from "@/components/layout/SearchBar";
import TheBanner from "@/components/layout/TheBanner";

export default {
  name: "AppNews",
  components: {
    BoardList,
    SearchBar,
    TheBanner,
  },
  data() {
    return {
      mainWidth: this.$store.state.mainWidth,
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
  created() {
    this.$store.commit("SET_SEARCH_OPTIONS", this.options);
  },
};
</script>

<style>
</style>