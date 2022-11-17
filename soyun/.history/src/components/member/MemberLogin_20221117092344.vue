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
        <v-checkbox v-model="svid" :label="아이디저장"  ></v-checkbox>
        <v-btn large width="100%">로그인</v-btn>
      </form>
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