<template>
  <v-main>
    <video muted autoplay loop>
      <source src="@/assets/main.mp4" type="video/mp4" />
    </video>
    <v-overlay z-index="0">
      <v-card class="pa-8" light width="500">
        <v-card-title class="justify-center text-h4 mb-4">비밀번호 찾기</v-card-title>
        <form>
          <label>이메일</label>
          <v-text-field v-model="emailId" outlined></v-text-field>
          <label>이름</label>
          <v-text-field v-model="name" outlined></v-text-field>
          <v-btn large width="100%">이메일 인증</v-btn>
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
    </v-overlay>
  </v-main>
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
video {
  position: fixed;
  object-fit: fill;
}
html {
  overflow: hidden !important;
}
</style>
