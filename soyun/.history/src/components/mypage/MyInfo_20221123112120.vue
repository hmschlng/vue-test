<template>
  <div class="pa-6 pt-16">
    <v-form class="pt-16">
      <label>이메일</label>
      <v-text-field v-model="emailId" de outlined readonly></v-text-field>
      <label>비밀번호</label>
      <v-row class="ma-0">
        <v-text-field outlined readonly value="****"></v-text-field>
        <!-- 비밀번호 수정 모달창 -->
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" large color="primary" x-large class="ml-4">비밀번호 수정</v-btn>
          </template>
          <v-card class="pa-8" light width="500">
            <v-card-title class="justify-center text-h4 mb-4">비밀번호 변경</v-card-title>
            <form>
              <label>현재 비밀번호</label>
              <v-text-field v-model="passwordNow" type="password" outlined></v-text-field>
              <label>변경 비밀번호</label>
              <v-text-field v-model="password" type="password" outlined></v-text-field>
              <label>변경 비밀번호 재확인</label>
              <v-text-field v-model="passwordConf" type="password" outlined></v-text-field>
              <v-btn :to="{ name: 'login' }" class="my-4" large width="100%" dark color="orange darken-2">변경</v-btn>
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
      emailId: "ssafy@ssafy.com",
      name: "김싸피",
      phoneNumber: "010-0000-0000",
      page: 1,
      dialog: false,
      passwordNow: null,
      pass
    };
  },
};
</script>

<style></style>
