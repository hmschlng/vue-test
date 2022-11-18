<template>
  <v-main>
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

export default {
  name: "AppNews",
  components: {
    BoardList,
    SearchBar,
  },
  data() {
    return {
      mainWidth: this.$store.getters.mainWidth,
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
    this.$store.commit("SET_OPTIONS", this.options);
  },
};
</script>

<style>
</style>