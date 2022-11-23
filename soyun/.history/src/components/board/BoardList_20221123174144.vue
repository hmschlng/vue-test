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
        <board-list-item v-for="article in getList" :key="article.articleNo" v-bind="article"></board-list-item>
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
      console.log();
      return this.$store.state.boardStore.categoryTab;
    },
    getList() {
      let param = {
        category: this.$store.state.boardStore.categoryTab == 0 ? "share" : "local",
        pgno: 1,
        pageSize: this.$store.state.boardStore.pageSize,
        option: this.$store.state.boardStore.pageSize,,
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
      return this.articles;
    },
  },
  // created() {

  // },
};
</script>

<style></style>
