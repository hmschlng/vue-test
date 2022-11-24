<template>
  <v-card id="joinCard" class="pa-8" light width="900" max-height="650" style="top: 32px">
    <v-card-title class="justify-center text-h4 mb-4"> 회원가입 </v-card-title>
    <v-form>
      <label>이메일</label>
      <v-row class="ma-0 pb-7" align="center">
        <v-text-field v-model="id" outlined hide-details></v-text-field>
        <div class="mx-1">@</div>
        <v-select v-model="emailDomain" :items="emailDomains" outlined hide-details></v-select>
        <!-- 비밀번호 수정 모달창 -->
        <v- dialogv-model="dialog" persistent max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" color="primary" x-large class="ml-4" @click="clickAuth">
              이메일 인증
            </v-btn>
          </template>
          <v-card class="pa-8 justify-center align-center" light width="500" height="400">
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
                <v-btn @click="clickAuthConf" class="my-6" large width="100%" dark color="orange darken-2"
                  >인증 확인</v-btn
                >
              </form>
            </v-container>
          </v-card>
        </v->
      </v-row>
      <label>비밀번호</label>
      <v-text-field
        v-model="member.pass"
        :type="pwstatus"
        outlined
        :rules="rules"
        placeholder="6 ~ 20자의 비밀번호를 입력하세요."
      ></v-text-field>
      <!-- 비밀번호 확인 -->
      <label>비밀번호 확인</label>
      <v-btn-toggle group>
        <v-btn x-small icon fab plain @click="showpassText">
          <v-icon dense>{{ pwicon }}</v-icon>
        </v-btn>
      </v-btn-toggle>
      <v-text-field
        v-model="passConf"
        :type="pwstatus"
        outlined
        placeholder=" 6 ~ 20자의 비밀번호를 입력하세요."
      ></v-text-field>
      <!-- 이름 -->
      <label>이름</label>
      <v-text-field v-model="member.name" type="text" outlined placeholder="ex) 홍길동"></v-text-field>
      <!-- 닉네임 -->
      <label>닉네임</label>
      <v-text-field v-model="member.nickname" type="text" outlined placeholder="ex) 대전의 전설"></v-text-field>
      <!-- 연락처 -->
      <label>연락처</label>
      <v-text-field v-model="member.phoneNumber" outlined placeholder="ex) 010-1234-5678"></v-text-field>
      <v-btn x-large width="100%" @click="join" dark color="orange darken-2">가입하기</v-btn>
    </v-form>
  </v-card>
</template>

<script>
// import { emitKeypressEvents } from "readline";
import { mapMutations } from "vuex";
import { join, checkEmailId } from "@/api/member";

export default {
  name: "MemberJoin",
  data() {
    return {
      id: null,
      member: {
        emailId: null,
        pass: null,
        name: null,
        nickname: null,
        phoneNumber: null,
      },
      emailDomain: null,
      emailDomains: ["ssafy.com", "naver.com", "gmail.com", "kakao.com"],
      passConf: null,
      // email auth
      dialog: false,
      isLoading: true,
      code: null,
      authCode: null,
      isAuth: false,
      // messages

      // 비밀번호 관련
      rules: [
        (value) => !!value || "비밀번호를 입력하세요.",
        (value) => (value && value.length >= 6 && value.length <= 20) || "비밀번호는 최소 5자 ~ 20자여야 합니다.",
      ],
      pwstatus: "password",
      pwicon: "mdi-eye-off",
    };
  },
  methods: {
    async clickAuth() {
      this.member.emailId = this.id + "@" + this.emailDomain;
      console.log("email", this.member.emailId);
      checkEmailId(
        this.member,
        ({ data }) => {
          if (!data) {
            alert("이미 가입된 이메일입니다.");
            this.dialog = false;
            return;
          } else {
            alert("인증 이메일이 발송되었습니다! 메일로 전송된 6자리 인증코드를 입력해주세요.");
            this.authCode = data;
            await setTimeout(() => (this.isLoading = false), 2000);
          }
        },
        (error) => {
          alert("오류!!!!");
          console.log(error);
        }
      );
    },
    clickAuthConf() {
      this.dialog = false;
      this.isLoading = true;
      if (this.authCode == this.code) {
        this.isAuth = true;
        alert("이메일 인증에 성공하였습니다.");
      } else {
        this.isAuth = false;
        alert("이메일 인증에 실패하였습니다.");
      }
      this.code = "";
    },
    showpassText() {
      if (this.pwicon == "mdi-eye-off") {
        this.pwstatus = "text";
        this.pwicon = "mdi-eye";
      } else {
        this.pwstatus = "password";
        this.pwicon = "mdi-eye-off";
      }
    },
    join() {
      if (this.check()) {
        join(
          this.member,
          ({ data }) => {
            if (!data) {
              alert("회원가입에 실패했습니다.");
            } else {
              alert("회원가입에 성공하였습니다.");
              this.$router.push({ name: "login" });
            }
          },
          (error) => {
            alert("오류!!!!");
            console.log(error);
          }
        );
      }
    },
    check() {
      // var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      if (this.member.emailId == "") {
        alert("이메일을 입력하세요.");
        return false;
      }

      if (this.member.pass == "") {
        alert("비밀번호를 입력하세요.");
        return false;
      }

      if (this.member.pass != this.passConf) {
        alert("비밀번호가 일치하지 않습니다.");
        return false;
      }

      if (this.member.name == "") {
        alert("이름을 입력하세요.");
        return false;
      }

      if (this.member.nickname == "") {
        alert("닉네임을 입력하세요.");
        return false;
      }

      if (this.member.phoneNumber == "") {
        alert("연락처를 입력하세요.");
        return false;
      }

      if (!this.isAuth) {
        alert("이메일 인증을 진행해주세요.");
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

<style scoped>
#joinCard {
  overflow: scroll !important;
}
::-webkit-scrollbar {
  width: 0;
  background-color: transparent;
}
</style>
