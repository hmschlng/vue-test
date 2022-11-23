<template>
  <div>
    <v-row align="center" justify="space-between" class="ma-1 mt-6">
      <v-col cols="3">
        <v-select
          v-model="pageSize"
          :items="pageSizes"
          dense
          outlined
          hide-details
        ></v-select>
      </v-col>
      <v-btn :to="{ name: 'boardwrite' }" color="primary" large>글작성</v-btn>
    </v-row>
    <board-list></board-list>
    <div class="text-center my-8">
      <v-pagination v-model="page" :length="6" ></v-pagination>
    </div>
    <v-row align="center" justify="center" class="mb-8">
      <search-bar></search-bar>
    </v-row>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import SearchBar from "@/components/layout/SearchBar";
import BoardList from "@/components/board/BoardList";

export default {
  name: "BoardMain",
  components: { SearchBar, BoardList },
  data() {
    return {
      mainWidth: this.$store.state.mainStore.mainWidth,
      page: 1,
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
      pageSizes: [
        {
          text: "10개씩 보기",
          value: "10",
        },
        {
          text: "20개씩 보기",
          value: "20",
        },
        {
          text: "30개씩 보기",
          value: "30",
        },
      ],
      pageSize: {
        text: "10개씩 보기",
        value: "10",
      },
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