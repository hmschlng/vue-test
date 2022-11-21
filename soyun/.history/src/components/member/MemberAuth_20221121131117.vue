<template>
  <v-card class="pa-8" light width="500" height="450" >
    <v-container>
    <v-progress-circular :v-show="isLoading" :size="70" :width="7" color="purple" indeterminate></v-progress-circular>

    <!-- <v-container :v-show="!isLoading">
      <v-card-title class="justify-center text-h4 mb-4">이메일 인증</v-card-title>
      <form>
        <label>인증코드</label>
        <v-text-field v-model="authCode" outlined></v-text-field>
        <v-btn :to="{ name: 'auth' }" class="my-4" large width="100%">인증 확인</v-btn>
      </form>
    </v-container> -->
  </v-card>
</template>

<script>
export default {
  name: "MemberAuth",
  data() {
    return {
      isLoading: true,
      authCode: null,
    };
  },
  created() {},
};
</script>

<style scoped></style>
