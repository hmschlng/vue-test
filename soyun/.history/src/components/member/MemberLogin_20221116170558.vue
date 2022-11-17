<template>
  <v-overlay z-index=0 >
    <v-card class="pa-20">
      <form>
        <label>이메일</label>
        <v-text-field
          v-model="email"
        ></v-text-field>
        <label>비밀번호</label>
        <v-text-field
          v-model="password"
        ></v-text-field>
      </form>
    </v-card>
  </v-overlay>
</template>

<script>
export default {
  name: "MemberLogin",
}
</script>

<style>

</style>