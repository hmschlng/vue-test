<template>
  <div>
    <!-- <h2>List {{ getTab }}</h2> -->
    <v-simple-table @click:row="moveDetail">
      <thead>
        <tr>
          <th v-for="header in headers" :key="header">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <board-list-item v-for="article in articles" :key="article.articleno" v-bind="article"></board-list-item>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
import BoardListItem from "@/components/board/item/BoardListItem";

export default {
  name: "BoardList",
  data() {
    return {
      headers: ["글번호", "제목", "작성자", "조회수", "작성일"],
      // temp data
      articles: [
        {
          articleno: 1,
          subject: "제목1",
          contents: "내용1",
          author: "김싸피",
          hit: 0,
          registerDate: "2022-11-01",
        },
        {
          articleno: 2,
          subject: "제목2",
          contents: "내용2",
          author: "김싸피",
          hit: 0,
          registerDate: "2022-11-02",
        },
        {
          articleno: 3,
          subject: "제목3",
          contents: "내용3",
          author: "김싸피",
          hit: 0,
          registerDate: "2022-11-03",
        },
        {
          articleno: 4,
          subject: "제목4",
          contents: "내용4",
          author: "김싸피",
          hit: 0,
          registerDate: "2022-11-04",
        },
        {
          articleno: 5,
          subject: "제목5",
          contents: "내용5",
          author: "김싸피",
          hit: 0,
          registerDate: "2022-11-05",
        },
      ],
    };
  },
  components: {
    BoardListItem,
  },
  computed: {
    getTab() {
      return this.$store.state.boardStore.communityTab;
    },
  },
  methods: {
    moveDetail(row) {
      this.$router.push({
        name: this.links[selectedTab],
      });
    }
  }
};
</script>

<style>
</style>