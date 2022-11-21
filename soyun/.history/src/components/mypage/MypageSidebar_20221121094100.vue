<template>
  <v-card height="100vh" class="pa-6">
    <h1 class="text-center">마이페이지</h1>
    <v-container class="pa-6">
      <v-avatar size="100%">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
    </v-container>
    <v-divider class="my-4"></v-divider>
    <v-tabs v-model="tab" color="grey" vertical hide-slider>
      <v-tab v-for="(tab, index) in tabs" :key="index" @click="clickTab(index)">
        {{ tab }}
      </v-tab>
    </v-tabs>
    <v-divider class="my-4"></v-divider>
    <v-btn :to="{name: 'notice'}" text width="100%">공지사항</v-btn>
    <v-btn :to="{name: 'helpcenter'}" text width="100%" >고객센터</v-btn>
    <v-divider class="my-4"></v-divider>
    <v-btn class="text-underline" text width="100%" color="grey">회원탈퇴</v-btn>
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

<style>
</style>