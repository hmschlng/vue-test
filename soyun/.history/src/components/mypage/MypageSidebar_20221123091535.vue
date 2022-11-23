<template>
  <v-card height="100vh" class="pa-6">
    <h1 class="text-center">마이페이지</h1>
    <v-row class="pa-6" style="position: relative">
      <v-avatar size="100%">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
      <v-row class="ma-3" justify="end" align="end">
        <v-btn absolute>안녕</v-btn>
         <v-icon x-large>mdi-home-heart</v-icon>
      </v-row>
    </v-row>
    <v-divider class="my-4"></v-divider>
    <v-tabs v-model="tab" color="grey" vertical hide-slider>
      <v-tab v-for="(tab, index) in tabs" :key="index" @click="clickTab(index)">
        {{ tab }}
      </v-tab>
    </v-tabs>
    <v-divider class="my-4"></v-divider>
    <v-btn :to="{ name: 'notice' }" text width="100%">공지사항</v-btn>
    <v-btn :to="{ name: 'helpcenter' }" text width="100%">고객센터</v-btn>
    <v-divider class="my-4"></v-divider>
    <!-- 회원탈퇴 확인 모달창 -->
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" text width="100%" color="grey" style="text-decoration: underline"
          >회원탈퇴</v-btn
        >
      </template>
      <v-card>
        <v-card-title class="text-h5"> 회원탈퇴 </v-card-title>
        <v-card-text class="text-h6"> 정말 탈퇴 하시겠습니까? </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"> 확인 </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false"> 취소 </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "MypageSidebar",
  components: {},
  data() {
    return {
      tab: this.$store.state.mypageStore.mypageTab,
      tabs: ["내정보", "찜 목록", "내글 목록"],
      links: ["myinfo", "wishlist", "mycommunity"],
      dialog: false,
    };
  },
  methods: {
    ...mapMutations("mypageStore", ["SET_MYPAGE_TAB"]),
    clickTab(selectedTab) {
      this.SET_MYPAGE_TAB(selectedTab);
      this.$router.replace({
        name: this.links[selectedTab],
      });
    },
  },
};
</script>

<style></style>
