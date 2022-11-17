<template>
  <v-row>
        <router-link style="text-decoration:none"
    :to="{ name: 'main' }"
    ><v-icon x-large>mdi-home-heart</v-icon></router-link>
    <v-toolbar-title default>
      WHERE IS MY HOME
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <router-link 
      v-for="item in header" :key="item.name"
      :to="{ name: item.name}" > {{ item.title }}</router-link>
      <v-btn
        v-for="menu in menus"
        :key="menu"
        text
        :to="menu.link"
      >
    <!-- 프로필 -->
     <v-avatar
          class="mr-10"
          color="grey darken-1"
          size="32"
        >
      <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="grey"
          v-bind="attrs"
          v-on="on"
        >
          <!-- 프로필 이미지 -->
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in profile"
          :key="index"
        >
          <router-link :to="{ name: item.name}" > {{ item.title }}</router-link>
        </v-list-item>
      </v-list>
    </v-menu>
    </v-avatar>
  </v-row>
</template>

<script>
export default {
    name: "TheHeader",
    data() {
        return {
          header: [],
          profile: []
        };
    },
    created() {
      this.menus = [
        {
          name: "map",
          title: "지도"
        },
        {
          name: "community",
          title: "커뮤니티"
        },
        {
          name: "news",
          title: "부동산 뉴스"
        },
        {
          name: "login",
          title: "로그인 | 회원가입"
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