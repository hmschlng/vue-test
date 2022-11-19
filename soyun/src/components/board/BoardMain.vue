<template>
  <v-main>
    <board-header></board-header>
    <v-row>
      <v-spacer />
      <v-col :cols="mainWidth">
        <v-row align="center" justify="space-between" class="ma-1">
          <v-btn :to="{ name: 'boardwrite' }" large>글작성</v-btn>
          <search-bar></search-bar>
        </v-row>
        <board-list></board-list>
      </v-col>
      <v-spacer />
    </v-row>
  </v-main>
</template>

<script>
import BoardHeader from "@/components/board/BoardHeader";
import SearchBar from "@/components/layout/SearchBar";
import BoardList from "@/components/board/BoardList";

export default {
  name: "BoardMain",
  components: { BoardHeader, SearchBar, BoardList,},
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
        {
          text: "작성자",
          value: "author",
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