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
    <v-btn v-for="menu in menus" :key="menu.link" :to="{ name: menu.link }" text>
      {{ menu.value }}
    </v-btn>

    <!-- 프로필 -->
    <v-avatar size="32">
      <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
    </v-avatar>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="transparent" elevation="0" v-bind="attrs" v-on="on"> 김싸피 님 </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-row>
            <v-col>
              <v-avatar size="36">
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
              </v-avatar>
            </v-col>
            <v-col>
              <v-list-item-title class="text-h6"> 김싸피 </v-list-item-title>
              <v-list-item-subtitle>ssafy@ssafy.com</v-list-item-subtitle>
            </v-col>
          </v-row>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="(item, index) in mypage" :key="index" >
          <v-icon>mdi-{{ item.icon }}</v-icon>
          <v-btn :to="{ name: item.link }" text> {{ item.value }}</v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
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
