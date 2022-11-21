<template>
  <v-main>
    <v-row>
      <v-spacer />
      <v-col :cols="mainWidth">
        <h2 class="my-10 text-center">회원가입</h2>
        <v-form>
          <label>이메일</label>
          <v-row class="ma-0" align="center">
            <v-text-field v-model="emailId" outlined></v-text-field>
            <div class="mb-7 mx-1">@</div>
            <v-select v-model="emailDomain" outlined>

            </v-select>
          </v-row>
          <label>비밀번호</label>
          <v-text-field v-model="password" type="password" outlined ></v-text-field>
          <label>비밀번호 재확인</label>
          <v-text-field v-model="passwordConf" type="password" outlined></v-text-field>
          <label>이름</label>
          <v-text-field v-model="name" type="password" outlined></v-text-field>
          <label>연락처</label>
          <v-text-field v-model="phoneNumber" outlined></v-text-field>
          <v-btn large width="100%" :to="{name: 'login'}">가입하기</v-btn>
        </v-form>
      </v-col>
      <v-spacer />
    </v-row>
  </v-main>
</template>

<script>
export default {
  name: "MemberJoin",
  data() {
    return {
      mainWidth: this.$store.state.mainStore.mainWidth,
      emailDomains: ["ssafy.com", "naver.com", "gmail.com", "kakao.com"],
      emailId: null,
      emailDomain: ["ssafy.com", "naver.com", "gmail.com", "kakao.com"],
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