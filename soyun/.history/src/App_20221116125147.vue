<template>
  <v-app>
    <v-app-bar app elevation="0" absolute clipped-left>
      <the-header></the-header>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
  <!-- 
    김 : 김밥
  소 : 소세지
  윤 : 윤석열 -->
</template>

<script>
import TheHeader from "@/components/layout/TheHeader";

export default {
  name: "App",
  components: {
    TheHeader,
  },
};
</script>