<template>
  <v-app-bar app absolute clipped-left
  style="z-index:2;">
    <!-- 홈 버튼 아이콘 -->
    <router-link style="text-decoration:none"
    :to="{ name: 'main' }"
    ><v-icon x-large>mdi-home-heart</v-icon></router-link>

    <!-- 서비스 제목 -->
    <v-toolbar-title default>
      WHERE IS MY HOME
    </v-toolbar-title>

    <v-spacer/>
    
    <!-- 메뉴 -->
    <v-btn
      v-for="menu in menus"
      :key="menu"
      text
      :to="menu.link"
    >
      {{ menu.value }}
    </v-btn>
  
  <!-- <v-spacer/> -->

  <!-- 프로필 -->
    <v-avatar size="32">
      <img 
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John">
    </v-avatar>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          small
          color="transparent"
          elevation="0"
          v-bind="attrs"
          v-on="on"
        >
          김싸피님
          <!-- 프로필 이미지 -->
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="menu in profile"
          :key="menu"
        >
          <router-link :to="menu.link" style="text-decoration:none"> {{ menu.value }}</router-link>
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
      menus: [],
      profile: []
    };
  },

  created() {
    this.menus = [
      {
        link: { name: 'map' },
        value: "지도"
      },
      {
        link: { name: 'community' },
        value: "커뮤니티"
      },
      {
        link: { name: 'news' },
        value: "부동산 뉴스"
      },
      {
        link: { name: 'login' },
        value: "로그인 | 회원가입"
      },
    ],
    this.profile = [
      {
        link: { name: 'mypage' },
        value: "내정보"
      },
      {
        link: { name: 'wishlist' },
        value: "찜 목록"
      },
      {
        link: { name: 'notice' },
        value: "공지사항"
      },
      {
        link: { name: 'helpcenter' },
        value: "고객센터"
      },
      {
        link: { name: 'mypage' },
        value: "로그아웃"
      },
    ]
  }
}
</script>

<style>

</style>