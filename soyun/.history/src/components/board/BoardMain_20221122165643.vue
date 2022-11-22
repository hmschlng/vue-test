<template>
  <div>
    <v-row align="center" justify="space-between" class="ma-1 mt-6">
      <v-col>
        
      </v-col>
      <v-select
          v-model="select"
          :items="getOptions"
          dense
          outlined
          hide-details
        ></v-select>
      <v-btn :to="{ name: 'boardwrite' }" color="primary" large>글작성</v-btn>
    </v-row>
    <board-list></board-list>
    <div class="text-center my-8">
      <v-pagination v-model="page" :length="6"></v-pagination>
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