<template>
  <div>
    <v-card class="pa-8" light width="500">
      <v-card-title class="justify-center text-h4 mb-4">이메일 인증</v-card-title>
      <form>
        <label>인증코드</label>
        <v-text-field v-model="authCode" outlined></v-text-field>
        <v-btn :to="{ name: 'auth' }" class="my-4" large width="100%">인증 확인</v-btn>
      </form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "MemberAuth",
  data() {
    return {
      authCode: null,
    };
  },
};
</script>

<style scoped></style>
