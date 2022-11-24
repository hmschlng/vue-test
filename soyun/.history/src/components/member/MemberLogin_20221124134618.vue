<template>
  <v-card class="pa-8" light width="500">
    <v-card-title class="justify-center text-h4 mb-4">로그인</v-card-title>
    <form>
      <v-text-field class="mb-5" v-model="emailId" placeholder="ssafy@ssafy.com" outlined hide-details></v-text-field>
      <v-text-field v-model="pass" placeholder="비밀번호" outlined hide-details></v-text-field>
      <v-checkbox v-model="svid" label="아이디저장" />
      <v-btn large width="100%" dark color="primary" elevation="2">로그인</v-btn>
    </form>
    <v-row class="pa-5" align="center" justify="space-around">
      <v-col align="center">
        <router-link :to="{ name: 'join' }" class="black--text">회원가입</router-link>
      </v-col>
      |
      <v-col align="center">
        <router-link :to="{ name: 'findpw' }" class="black--text">비밀번호찾기</router-link></v-col
      >
    </v-row>
  </v-card>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "MemberLogin",
  data() {
    return {
      emailId: null,
      pass: null,
      svid: null,
    };
  },
  methods: {
    ...mapMutations("memberStore", ["SET_USER", "SET_LOGINED"]),
    signin() {
      if (this.check()) {
        http
          .post("/user/signin", {
            email: this.email,
            pass: this.pass,
          })
          .then((response) => {
            if (response.status === 200) {
              alert("로그인에 성공하였습니다.");
              this.setUser(response.data);
              this.$router.push({ name: "main" });
            } else {
              alert("이메일 또는 비밀번호가 일치하지 않습니다.");
              this.$router.push("/user/signin");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    // showUser() {
    //   console.log(this.user().name);
    // },
    check() {
      var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      if (this.emailId == "") {
        alert("이메일을 입력하세요.");
        return false;
      }

      if (this.emailId.match(regExp) == null) {
        alert("이메일 형식으로 입력하세요.");
        return false;
      }

      if (this.pass == "") {
        alert("비밀번호를 입력하세요.");
        return false;
      }

      return true;
    },

    ...mapMutations("memberStore", {
      setUser: "SET_USER",
    }),
  },
};
</script>

<style scoped></style>
