<template>
  <v-row>
        <router-link style="text-decoration:none"
    :to="{ name: 'main' }"
    ><v-icon x-large>mdi-home-heart</v-icon></router-link>
    <v-toolbar-title default>
      WHERE IS MY HOME
    </v-toolbar-title>
    <v-spacer></v-spacer>
     <v-btn
        v-for="menu in menus"
        :key="menu"
        text
        :to="menu.link"
      >
         {{ menu.value }}
      </v-btn>
     
    <!-- 프로필 -->
    <v-row>
      
    </v-row>
    
  </v-row>
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
          link: "map",
          value: "지도"
        },
        {
          link: "community",
          value: "커뮤니티"
        },
        {
          link: "news",
          value: "부동산 뉴스"
        },
        {
          link: "login",
          value: "로그인 | 회원가입"
        },
      ],
      this.profile = [
        {
          name: "mypage",
          title: "내정보"
        },
        {
          name: "wishlist",
          title: "찜 목록"
        },
        {
          name: "notice",
          title: "공지사항"
        },
        {
          name: "helpcenter",
          title: "고객센터"
        },
        {
          name: "mypage",
          title: "로그아웃"
        },
      ]
    }
}
</script>

<style>

</style>