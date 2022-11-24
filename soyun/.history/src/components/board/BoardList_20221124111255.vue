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
import { mapMutations } from "vuex";
import { countListSize, listArticle } from "@/api/board";
import BoardListItem from "@/components/board/item/BoardListItem";

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
   methods: {
    ...mapMutations("boardStore", ["SET_PAGE_LENGTH"]),
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
    countListSize(
      param,
      ({ data }) => {
        let tatalArticle = data;
        let pageLength = (data/this.$store.state.boardStore.pageSize)+
        this.SET_PAGE_LENGTH(data);
      },
      (error) => {
        console.log(error);
      }
    );
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
