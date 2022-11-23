<template>
  <v-card class="pa-8" light width="800" max-height="800">
    <v-card-title class="justify-center text-h4 mb-4">회원가입</v-card-title>
    <v-form>
      <label>이메일</label>
      <v-row class="ma-0 pb-7" align="center">
        <v-text-field v-model="emailId" outlined hide-details></v-text-field>
        <div class="mx-1">@</div>
        <v-select v-model="emailDomain" :items="emailDomains" outlined hide-details></v-select>
        <!-- 비밀번호 수정 모달창 -->
        <v-dialog v-model="dialog" persistent min-width="500px" min-heig >
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" large color="primary" x-large class="ml-4" @click="setLoading">이메일 인증</v-btn>
          </template>
          <v-card class="pa-8" light width="500px">
            <v-container v-show="isLoading" fill-height>
              <v-row align="center" justify="center">
                <v-progress-circular :size="70" :width="7" color="orange" indeterminate></v-progress-circular>
              </v-row>
            </v-container>
            <v-container v-show="!isLoading">
              <v-card-title class="justify-center text-h4 mb-4">이메일 인증</v-card-title>
              <form>
                <label>인증코드</label>
                <v-text-field v-model="authCode" outlined></v-text-field>
                <v-btn @click="dialog = false" class="my-4" width="100%" dark color="orange darken-2" x-large
                  >인증 확인</v-btn
                >
              </form>
            </v-container>
          </v-card>
        </v-dialog>
      </v-row>
      <label>비밀번호</label>
      <v-text-field v-model="password" type="password" outlined></v-text-field>
      <label>비밀번호 재확인</label>
      <v-text-field v-model="passwordConf" type="password" outlined></v-text-field>
      <label>이름</label>
      <v-text-field v-model="name" type="password" outlined></v-text-field>
      <label>연락처</label>
      <v-text-field v-model="phoneNumber" outlined></v-text-field>
      <v-btn large width="100%" :to="{ name: 'login' }" dark color="orange darken-2">가입하기</v-btn>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "MemberJoin",
  data() {
    return {
      emailDomains: ["ssafy.com", "naver.com", "gmail.com", "kakao.com"],
      emailId: null,
      emailDomain: null,
      password: null,
      passwordConf: null,
      name: null,
      phoneNumber: null,
      // email auth
      isLoading: true,
      authCode: null,
    };
  },
  methods: {
    setLoading() {
      setTimeout(() => (this.isLoading = false), 2000);
    }
  },
};
</script>

<style></style>
