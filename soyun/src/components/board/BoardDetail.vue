<template>
  <div class="py-8">
    <v-divider class="black" />
    <v-row justify="space-between" class="my-4">
      <v-col align-self="">
        <div>제목</div>
        <div class="grey--text">작성자 | 2022-11-22</div>
      </v-col>
      <v-row justify="end" align="center" class="mr-3">
        <v-btn
          :to="{ name: 'boardupdate', params: { articleno: articleno } }"
          class="ma-1"
          >수정</v-btn
        >
        <v-btn :to="{ name: 'community' }" class="ma-1">삭제</v-btn>
      </v-row>
    </v-row>
    <v-divider />
    <v-container class="my-4">
      Plesk에서 데이터베이스 덤프를 내보내는 것은 소스 데이터베이스를 파일에
      저장한 다음 저장 또는 배포에 사용할 수 있음을 의미합니다. 데이터베이스
      덤프를 가져오는 것은 이러한 파일에서 대상 데이터베이스로 데이터를 복원하는
      것을 의미합니다. 데이터베이스를 동일하거나 다른 데이터베이스 서버로 가져올
      수 있습니다. 유일한 제한 사항은 원본 및 대상 데이터베이스가 동일한
      유형(예: MySQL)이어야 한다는 것입니다.
    </v-container>
    <v-divider />
    <v-row justify="center" class="my-4">
      <v-btn
        :to="{ name: 'community' }"
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
import BoardCommentItem from "./item/BoardCommentItem";
export default {
  components: { BoardCommentItem },
  name: "BoardDetail",
  data() {
    return {
      mainWidth: this.$store.state.mainStore.mainWidth,
      articleno: this.$route.params.articleno,
    };
  },
};
</script>

<style>
</style>