<template>
  <div class="pa-6 pt-16">
    <v-form class="pt-16">
      <label>이메일</label>
      <v-text-field v-model="emailId" outlined readonly></v-text-field>
      <label>비밀번호</label>
      <v-row>
        
      </v-row>
      <v-text-field outlined readonly value="****"></v-text-field>
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
      emailId: "ssafy",
      name: "김싸피",
      phoneNumber: "010-0000-0000",
    };
  },
};
</script>

<style>
</style>