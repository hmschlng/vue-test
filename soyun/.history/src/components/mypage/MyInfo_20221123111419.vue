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
          <v-btn v-bind="attrs" v-on="on" large color="primary" x-large>비밀번호 수정</v-btn>
           <v-btn x-large class="ml-4"></v-btn>
        </template>
        <v-card>
          <v-card-title class="justify-center text-h4 ma-8">
            문의하기
          </v-card-title>
          <v-card-text>
            <board-input-item type="qna"></board-input-item>
            <small>최대한 빠르고 친절하게 답변드리겠습니다.</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              등록
            </v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false">
              취소
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      </v-row>
      <label>이름</label>
      <v-text-field v-model="name" outlined readonly></v-text-field>
      <label>연락처</label>
      <v-text-field v-model="phoneNumber" outlined readonly></v-text-field>
      <v-btn large width="100%">프로필 수정</v-btn>
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
    };
  },
};
</script>

<style></style>
