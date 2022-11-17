<template>
  <v-overlay z-index=0 >
    <v-card class="pa-10" light width="600">
      <form>
        <label>이메일</label>
        <v-text-field
          v-model="email"
        ></v-text-field>
        <label>비밀번호</label>
        <v-text-field
          v-model="password"
        ></v-text-field>
        <v-checkbox v-model="svid" label="아이디저장" />
        <v-btn large width="100%">로그인</v-btn>
      </form>
      <v-row class="ma-5" align-content="center">
        <router-link :to="{name:'join'}" >회원가입</router-link>
        <router-link :to="{name:'join'}" >비밀번호찾기</router-link>
      </v-row>
      </v-card>
  </v-overlay>
</template>

<script>
export default {
  name: "MemberLogin",
  data() {
    return {
      svid: null,
    };
  }
}
</script>

<style>

</style>