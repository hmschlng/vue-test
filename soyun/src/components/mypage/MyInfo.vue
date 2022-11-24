<template>
  <div class="pa-6 pt-16">
    <v-form class="pt-16">
      <label>이메일</label>
      <v-text-field v-model="user.emailId" outlined readonly></v-text-field>
      <label>비밀번호</label>
      <v-row class="ma-0">
        <v-text-field outlined readonly value="****"></v-text-field>
        <!-- 비밀번호 수정 모달창 -->
        <v-dialog v-model="dialogPw" persistent max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              large
              color="primary"
              x-large
              class="ml-4"
              >비밀번호 수정</v-btn
            >
          </template>
          <v-card class="pa-8" light width="500px">
            <v-card-title class="justify-center text-h4 mb-4"
              >비밀번호 변경</v-card-title
            >
            <form>
              <!-- <label>현재 비밀번호</label>
              <v-text-field
                v-model="passNow"
                type="password"
                outlined
                placeholder="비밀번호를 입력해주세요."
              ></v-text-field> -->
              <label>변경 비밀번호</label>
              <v-text-field
                v-model="pass"
                :type="pwstatus"
                :rules="rules"
                outlined
                placeholder=" 6 ~ 20자의 비밀번호를 입력하세요."
              ></v-text-field>
              <label>변경 비밀번호 재확인</label>
              <v-text-field
                v-model="passConf"
                :type="pwstatus"
                outlined
                placeholder=" 6 ~ 20자의 비밀번호를 입력하세요."
              ></v-text-field>
              <v-btn
                @click="clickUpdatePw"
                class="my-4"
                width="100%"
                dark
                color="orange darken-2"
                x-large
                >변경</v-btn
              >
            </form>
          </v-card>
        </v-dialog>
      </v-row>
      <label>이름</label>
      <v-text-field v-model="user.name" outlined></v-text-field>
      <label>닉네임</label>
      <v-text-field v-model="user.nickname" outlined></v-text-field>
      <label>연락처</label>
      <v-text-field v-model="user.phoneNumber" outlined></v-text-field>
      <!-- 프로필 수정 모달창 -->
      <v-dialog v-model="dialogProfile" persistent max-width="500px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" x-large width="100%" color="primary"
            >프로필 수정</v-btn
          >
        </template>
        <v-card>
          <v-card-title class="text-h5"> 프로필 수정 </v-card-title>
          <v-card-text class="text-h6"> 정말 수정 하시겠습니까? </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="clickUpdate">
              확인
            </v-btn>
            <v-btn color="blue darken-1" text @click="dialogProfile = false">
              취소
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { updatePass, updateMember, login } from "@/api/member";
// import sha256 from "crypto-js/sha256";

export default {
  name: "MyInfo",
  data() {
    return {
      user: this.$store.state.memberStore.user,
      dialogPw: false,
      dialogProfile: false,
      // passNow: null,
      pass: null,
      passConf: null,

      // 비밀번호 관련
      rules: [
        (value) => !!value || "비밀번호를 입력하세요.",
        (value) =>
          (value && value.length >= 6 && value.length <= 20) ||
          "비밀번호는 최소 5자 ~ 20자여야 합니다.",
      ],
      pwstatus: "password",
      pwicon: "mdi-eye-off",
    };
  },
  methods: {
    ...mapMutations("memberStore", ["SET_USER"]),
    clickUpdatePw() {
      // if (this.user.pass != this.passNow) {
      //   alert("현재 비밀번호가 일치하지 않습니다.");
      // } else
      if (this.pass != this.passConf) {
        alert("변경할 비밀번호를 다시 확인해주세요.");
      } else {
        updatePass(
          {
            emailId: this.user.emailId,
            pass: this.pass,
          },
          ({ data }) => {
            console.log("test", data);
            if (!data) {
              alert("비밀번호 변경에 실패했습니다.");
            } else {
              alert("비밀번호 변경에 성공했습니다.");
            }
          },
          (error) => {
            alert("오류!!!!");
            console.log(error);
          }
        );
      }
      this.dialogPw = false;
    },
    clickUpdate() {
      updateMember(
        this.user,
        ({ data }) => {
          if (!data) {
            alert("프로필 수정에 실패했습니다.");
          } else {
            alert("프로필 수정에 성공했습니다.");
            this.setUser(this.user.emailId, this.user.pass);
          }
        },
        (error) => {
          alert("오류!!!!");
          console.log(error);
        }
      );
    },
    setUser(emailId, pass) {
      login(
        {
          emailId: emailId,
          pass: pass,
        },
        ({ data }) => {
          if (!data) {
            alert("실패!!!");
          } else {
            this.SET_USER(data);
          }
        },
        (error) => {
          alert("오류!!!!");
          console.log(error);
        }
      );
    },
  },
};
</script>

<style></style>
