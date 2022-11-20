<template>
  <v-form id="boardInput">
    <label>제목</label>
    <v-text-field v-model="subject" outlined></v-text-field>
    <label>내용</label>
    <v-textarea v-model="contents" outlined></v-textarea>
    <v-row v-if="this.type !== 'qna'" justify="end">
      <v-btn
        v-if="this.type === 'register'"
        :to="{ name: 'community' }"
        class="ma-2"
        large
        >등록</v-btn
      >
      <v-btn v-else :to="{ name: 'community' }" class="ma-2" large>수정</v-btn>
      <v-btn :to="{ name: 'community' }" class="ma-2" large>목록</v-btn>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: "BoardInputItem",
  data() {
    return {
      subject: "",
      contents: "",
    };
  },
  props: {
    type: { type: String },
  },
  created() {
    if (this.type === "update") {
      this.subject = this.$route.params.articleno;
      this.contents = this.$route.params.articleno;
    }
  },
};
</script>

<style>
</style>