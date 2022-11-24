<template>
  <v-card class="pa-8 justify-center align-center" light width="500" height="450">
    <v-container v-show="isLoading" fill-height>
      <v-row align="center" justify="center">
        <v-progress-circular :size="70" :width="7" color="orange" indeterminate></v-progress-circular>
      </v-row>
    </v-container>
    <v-container v-show="!isLoading">
      <v-card-title class="justify-center text-h4 mb-12">이메일 인증</v-card-title>
      <form>
        <label>인증코드</label>
        <v-text-field v-model="code" outlined></v-text-field>
        <v-btn @click="clickAuth" class="my-12" large width="100%" dark color="orange darken-2"
          >인증 확인</v-btn
        >
      </form>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "MemberAuth",
  props: {
    authCode: Number,
  },
  data() {
    return {
      isLoading: true,
      code: null,
    };
  },
  created() {
    setTimeout(() => (this.isLoading = false), 2000);
  },
  methods: {
    clickAuth(){
      if(this.code==this.authCode){
        alert("인증에 성공했습니다.");
        this.$router.push({name: "updatepw"});
      }else {
        alert("올바른 인증코드가 아닙니다.");
      }
    }
  },
};
</script>

<style scoped></style>
