<template>
 <v-card class="pa-8" light width="500">
        <v-card-title class="justify-center text-h4 mb-4">비밀번호 찾기</v-card-title>
        <form>
          <label>이메일</label>
          <v-text-field v-model="emailId" outlined></v-text-field>
          <label>이름</label>
          <v-text-field v-model="name" outlined></v-text-field>
          <v-btn class="mb-4" large width="100%">이메일 인증</v-btn>
        </form>
      </v-card>
</template>

<script>
export default {
  name: "MemberFindPw",
  data() {
    return {
      emailId: null,
      password: null,
      svid: null,
    };
  },
};
</script>

<style scoped>

</style>
