<template>
  <div>
    <v-row class="my-4">
      <v-spacer/>
      <search-bar></search-bar>
      <v-spacer/>
    </v-row>
    <board-list></board-list>
    <div class="text-center my-8">
      <v-pagination v-model="page" :length="getPageLen" @input="clickPage"></v-pagination>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import SearchBar from "@/components/layout/SearchBar";
import BoardList from "@/components/board/BoardList";

export default {
  name: "NoticeMain",
  components: { SearchBar, BoardList },
  data() {
    return {
      mainWidth: this.$store.state.mainStore.mainWidth,
      page: this.$store.state.boardStore.pgno,
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
    ...mapMutations("boardStore", ["SET_PAGE_SIZE", "SET_SEARCH_OPTIONS", "SET_CATEGORY_TAB", "SET_PGNO"]),
    clickPage() {
      this.SET_PGNO(this.page);
      this.$router.replace({name: "notice"});
    },
  },
  created() {
    this.SET_SEARCH_OPTIONS(this.options);
    this.SET_PGNO(1);
    this.SET_CATEGORY_TAB(2);
    this.SET_PAGE_SIZE(10);
  },
  computed: {
    getPageLen() {
      return this.$store.state.boardStore.pageLength;
    },
  },
};
</script>

<style></style>
