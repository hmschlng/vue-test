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
          <label>인증</label>
          <v-text-field v-model="name" outlined></v-text-field>
          <v-btn class="mb-4" large width="100%">이메일 인증</v-btn>
        </form>
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
