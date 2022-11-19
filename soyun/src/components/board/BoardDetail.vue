<template>
  <v-main>
    <v-row>
      <v-spacer />
      <v-col :cols="mainWidth">
        <h2 class="my-10 text-center">글보기</h2>
        <v-form id="boardInput">
          <label>제목</label>
          <v-text-field v-model="articleno" outlined readonly></v-text-field>
          <label>내용</label>
          <v-textarea v-model="articleno" outlined readonly></v-textarea>
          <v-row justify="end">
            <v-btn :to="{ name: 'boardupdate', params: {articleno : articleno} }" class="ma-2" large>수정</v-btn>
            <v-btn :to="{ name: 'community' }" class="ma-2" large>삭제</v-btn>
            <v-btn :to="{ name: 'community' }" class="ma-2" large>목록</v-btn>
          </v-row>
        </v-form>
      </v-col>
      <v-spacer />
    </v-row>
  </v-main>
</template>

<script>
export default {
  name: "BoardDetail",
  data() {
    return {
      mainWidth: this.$store.state.mainWidth,
      articleno: this.$route.params.articleno,
    };
  },
};
</script>

<style>
</style>