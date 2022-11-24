<template>
  <v-card class="pa-8" light width="500">
    <v-card-title class="justify-center text-h4 mb-4">비밀번호 찾기</v-card-title>
    <form>
      <label>이메일</label>
      <v-text-field v-model="emailId" outlined placeholder="가입하신 이메일 주소를 입력하세요."></v-text-field>
      <v-btn :to="{ name: 'auth' }" class="my-4" large width="100%" dark color="orange darken-2" >이메일 인증</v-btn>
    </form>
  </v-card>
</template>

<script>
export default {
  name: "MemberFindPw",
  data() {
    return {
      emailId: null,
    };
  },
};
</script>

<style scoped></style>
