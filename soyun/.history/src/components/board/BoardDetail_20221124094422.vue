<template>
  <div class="py-8">
    <v-divider class="black" />
    <v-row justify="space-between" class="my-4">
      <v-col align-self="">
        <div>{{ article.title }}</div>
        <div class="grey--text">
          {{ article.nickname }} | {{ article.registerTime }}
        </div>
      </v-col>
      <v-row justify="end" align="center" class="mr-3">
        <v-btn
          :to="{ name: 'boardupdate', params: { articleNo: articleNo } }"
          class="ma-1"
          >수정</v-btn
        >
        <v-btn @click="deleteArticle" class="ma-1">삭제</v-btn>
      </v-row>
    </v-row>
    <v-divider />
    <v-container class="my-4" v-html="article.content">
    </v-container>
    <v-divider />
    <v-row justify="center" class="my-4">
      <v-btn
        @click="moveList"
        class="ma-2"
        large
        color="primary"
        width="150px"
        >목록</v-btn
      >
    </v-row>
    <v-row align="center" class="grey lighten-4 pa-6 my-6">
      <v-text-field
        placeholder="댓글을 입력해주세요."
        outlined
        hide-details
        class="mr-4 white"
      ></v-text-field>
      <v-btn large>등록</v-btn>
    </v-row>
    <board-comment-item v-for="item in 3" :key="item"></board-comment-item>
  </div>
</template>

<script>
import { getArticle, deleteArticle } from "@/api/board";
// import { mapState } from "vuex";
import BoardCommentItem from "./item/BoardCommentItem";

export default {
  components: { BoardCommentItem },
  name: "BoardDetail",
  data() {
    return {
      mainWidth: this.$store.state.mainStore.mainWidth,
      articleNo: this.$route.params.articleNo,
      article: {},
    };
  },
  created() {
    let param = this.$route.params.articleNo;
    getArticle(
      param,
      ({ data }) => {
        this.article = data;
        console.log(this.article);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  methods: {
    deleteArticle() {
      let param = this.$route.params.articleNo;
      if (confirm("정말로 삭제?")) {
        deleteArticle(
          param,
          ({ data }) => {
            let msg = "삭제 처리시 문제가 발생했습니다.";
            if (data === true) {
              msg = "삭제가 완료되었습니다.";
            }
            alert(msg);
            // 현재 route를 /list로 변경.
            this.$router.push({ name: "community" });
          },
          (error) => {
            console.log(error);
          }
        );
      }
    },
    moveList(){
      let category = this.$store.state.boardStore.categoryTab;
      let name = category"";
      this.$router.push({
        name: name
      });
    }
  },
};
</script>

<style>
</style>