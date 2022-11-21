<template>
  <v-card class="pa-8" light width="800" max-height="800">
    <v-card-title class="justify-center text-h4 mb-4">회원가입</v-card-title>
    
    <v-row>
      <v-spacer />
      <v-col :cols="mainWidth">
        <h2 class="my-10 text-center">회원가입</h2>
        
      </v-col>
      <v-spacer />
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "MemberJoin",
  data() {
    return {
      mainWidth: this.$store.state.mainStore.mainWidth,
      emailDomains: ["ssafy.com", "naver.com", "gmail.com", "kakao.com"],
      emailId: null,
      emailDomain: null,
      password: null,
      passwordConf: null,
      name: null,
      phoneNumber: null,
    };
  },
};
</script>

<style>
</style>