<template>
  <div>
    <!-- <h2>List {{ getTab }}</h2> -->
    <v-simple-table>
      <thead>
        <tr>
          <th v-for="header in headers" :key="header">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <board-list-item v-for="article in articles" :key="article.articleNo" v-bind="article"></board-list-item>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
import BoardListItem from "@/components/board/item/BoardListItem";
import { listArticle } from "@/api/board";

export default {
  name: "BoardList",
  data() {
    return {
      headers: ["글번호", "제목", "작성자", "조회수", "작성일"],
      articles: [],
    };
  },
  components: {
    BoardListItem,
  },
  computed: {
    getTab() {
      return this.$store.state.boardStore.categoryTab;
    },
  },
   created() {
    let param = {searchOptions
      category: this.$store.state.boardStore.searchOptions[this.$store.state.boardStore.];
      pgno: 1,
      pageSize: 10,
      option: null,
      keyword: null,
    };
    listArticle(
      param,
      ({ data }) => {
        this.articles = data;
        console.log(this.articles);
      },
      (error) => {
        console.log(error);
      }
    );
  },
};
</script>

<style></style>
