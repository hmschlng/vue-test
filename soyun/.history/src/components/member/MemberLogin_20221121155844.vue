<template>
  <v-card class="pa-8" light width="500">
    <v-card-title class="justify-center text-h4 mb-4">로그인</v-card-title>
    <form>
      <v-text-field class="mb-5" v-model="emailId" placeholder="ssafy@ssafy.com" outlined hide-details></v-text-field>
      <v-text-field v-model="password" placeholder="비밀번호" outlined hide-details></v-text-field>
      <v-checkbox v-model="svid" label="아이디저장" />
      <v-btn large width="100%" dark color="orange darken-20" elevation="1" >로그인</v-btn>
    </form>
    <v-row class="pa-5" align="center" justify="space-around">
      <v-col align="center">
        <router-link :to="{ name: 'join' }" class="black--text">회원가입</router-link>
      </v-col>
      |
      <v-col align="center">
        <router-link :to="{ name: 'findpw' }" class="black--text">비밀번호찾기</router-link></v-col
      >
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "MemberLogin",
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
