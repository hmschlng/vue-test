<template>
  <div>
    <v-simple-table>
      <thead>
        <tr>
          <th v-for="header in headers" :key="header">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <board-list-item
          v-for="article in articles"
          :key="article.articleNo"
          v-bind="article"
        ></board-list-item>
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
    let category = this.$store.state.boardStore.categoryTab;
    let param = {
      category:
        category == 0
          ? "share"
          : category == 1
          ? "local"
          : category == 2
          ? "notice"
          : "one_on_one",
      pgno: this.$store.state.boardStore.pgno,
      pageSize: this.$store.state.boardStore.pageSize,
      option: this.$store.state.boardStore.option,
      keyword: this.$store.state.boardStore.keyword,
    };
    console.dir(param);
    listArticle(
      param,
      ({ data }) => {
        this.articles = data;
      },
      (error) => {
        console.log(error);
      }
    );
  },
};
</script>

<style></style>
