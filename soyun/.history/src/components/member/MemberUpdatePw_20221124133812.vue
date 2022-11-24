<template>
  <v-card class="pa-8" light width="500">
    <v-card-title class="justify-center text-h4 mb-4">비밀번호 변경</v-card-title>
    <form>
      <label>비밀번호</label>
      <v-text-field v-model="pass" type="password" outlined></v-text-field>
      <label>비밀번호 재확인</label>
      <v-text-field v-model="passConf" type="pass" outlined></v-text-field>
      <v-btn :to="{ name: 'login' }" class="my-4" large width="100%" dark color="orange darken-2">변경</v-btn>
    </form>
  </v-card>
</template>

<script>
export default {
  name: "MemberUpdatePw",
  data() {
    return {
      pass: null,
      passConf: null,
    };
  },
};
</script>

<style scoped></style>
