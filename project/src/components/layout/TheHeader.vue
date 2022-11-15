<template>
  <v-app-bar app absolute clipped-left>
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
      <!-- <router-link :to="{ name: 'map'}" > 지도</router-link>
      <router-link :to="{ name: 'community'}" > 커뮤니티</router-link>
      <router-link :to="{ name: 'news'}" > 부동산 뉴스</router-link>
      <router-link :to="{ name: 'login'}" > 로그인 | 회원가입</router-link> -->
      <v-avatar
          class="mr-10"
          color="grey darken-1"
          size="32"
        ><v-btn :to="{ name: 'profile'}" /></v-avatar>
      <!--  -->
  </v-app-bar>
</template>

<script>
export default {
    name: "TheHeader",
    data: () => ({
      menus: [
        {
          link: { name: 'map'},
          value: "지도"
        },
        {
          link: { name: 'community'},
          value: "커뮤니티"
        },
        {
          link: { name: 'news'},
          value: "부동산 뉴스"
        },
        {
          link: { name: 'login'},
          value: "로그인 | 회원가입"
        },
      ],
    }),
}
</script>

<style>

</style>