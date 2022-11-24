<template>
  <v-app-bar app clipped-left fixed style="z-index: 2">
    <!-- 홈 버튼 아이콘 + 서비스 제목 -->
    <router-link :to="{ name: 'main' }">
      <v-row align="center">
        <v-icon x-large>mdi-home-heart</v-icon>
        <v-toolbar-title default>WHERE IS MY HOME</v-toolbar-title>
      </v-row>
    </router-link>

    <v-spacer></v-spacer>

    <!-- 메뉴 -->
    <v-btn v-for="menu in menus" :key="menu.link" text @click="clickMenu(menu.link)">
      {{ menu.value }}
    </v-btn>

    <!-- 프로필 -->
    <div v-if="user==null">
      
    </div>
    <div v-else>

    </div>
    
  </v-app-bar>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "TheHeader",
  data() {
    return {
      user: this.$store.state.memberStore.user,
      menus: [
        {
          link: "map",
          value: "지도",
        },
        {
          link: "community",
          value: "커뮤니티",
        },
        {
          link: "news",
          value: "부동산 뉴스",
        },
        {
          link: "login",
          value: "로그인 | 회원가입",
        },
      ],
      mypage: [
        {
          link: "myinfo",
          value: "내정보",
          icon: "account",
        },
        {
          link: "wishlist",
          value: "찜 목록",
          icon: "cards-heart",
        },
        {
          link: "mycommunity",
          value: "내글 목록",
          icon: "pencil-box-multiple",
        },
        {
          link: "notice",
          value: "공지사항",
          icon: "bullhorn",
        },
        {
          link: "helpcenter",
          value: "고객센터",
          icon: "face-agent",
        },
        {
          link: "main",
          value: "로그아웃",
          icon: "account-arrow-right-outline",
        },
      ],
    };
  },
  methods: {
    ...mapMutations("boardStore", ["SET_CATEGORY_TAB", "SET_KEYWORD", "SET_PGNO"]),
    clickMenu(link) {
      if (link === "community") {
        this.SET_CATEGORY_TAB(0);
        this.SET_KEYWORD(null);
        this.SET_PGNO(1);
      }
      this.$router.push({
        name: link,
      });
    },
  },
};
</script>

<style>
a {
  text-decoration: none;
}
a > div {
  color: black;
}
</style>
