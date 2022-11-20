<template>
  <v-main>
    <v-row class="mt-5">
      <v-spacer />
      <v-col :cols="mainWidth">
        <h1 class="text-center">공지사항</h1>
        <search-bar></search-bar>
        <board-list></board-list>
      </v-col>
      <v-spacer />
    </v-row>
  </v-main>
</template>

<script>
import { mapMutations } from "vuex";
import SearchBar from "@/components/layout/SearchBar";
import BoardList from "@/components/board/BoardList";

export default {
  name: "AppNotice",
  components: {
    BoardList,
    SearchBar,
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
    ...mapMutations("boardStore", ["SET_SEARCH_OPTIONS"]),
  },
  created() {
    this.SET_SEARCH_OPTIONS(this.options);

  },
};
</script>

<style>
</style>