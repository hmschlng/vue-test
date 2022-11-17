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
    김 : 김소윤 나는
    소 : 소신있게
    윤 : 윤석열을 지지합니다.
  -->
  
  </style>
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