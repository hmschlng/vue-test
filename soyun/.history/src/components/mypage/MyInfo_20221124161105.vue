<template>
  <div class="pa-6 pt-16">
    <v-form class="pt-16">
      <label>이메일</label>
      <v-text-field v-model="emailId" de outlined readonly></v-text-field>
      <label>비밀번호</label>
      <v-row class="ma-0">
        <v-text-field outlined readonly value="****"></v-text-field>
        <!-- 비밀번호 수정 모달창 -->
        <v-dialog v-model="dialog" persistent max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" large color="primary" x-large class="ml-4">비밀번호 수정</v-btn>
          </template>
          <v-card class="pa-8" light width="500px">
            <v-card-title class="justify-center text-h4 mb-4">비밀번호 변경</v-card-title>
            <form>
              <label>현재 비밀번호</label>
              <v-text-field v-model="passNow" type="password" outlined></v-text-field>
              <label>변경 비밀번호</label>
              <v-text-field v-model="pass" type="password" outlined></v-text-field>
              <label>변경 비밀번호 재확인</label>
              <v-text-field v-model="passConf" type="password" outlined></v-text-field>
              <v-btn @click="dialog = false" class="my-4" width="100%" dark color="orange darken-2" x-large>변경</v-btn>
            </form>
          </v-card>
        </v-dialog>
      </v-row>
      <label>이름</label>
      <v-text-field v-model="name" outlined readonly></v-text-field>
      <label>연락처</label>
      <v-text-field v-model="phoneNumber" outlined readonly></v-text-field>
      <v-btn x-large width="100%" color="primary">프로필 수정</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "MyInfo",
  data() {
    return {
      user:{
        emailId: "ssafy@ssafy.com",
        name: "김싸피",
        phoneNumber: "010-0000-0000",

      },
      page: 1,
      dialog: false,
      passNow: null,
      pass: null,
      passConf: null,
    };
  },
};
</script>

<style></style>
