<template>
  <v-app>
    <v-app-bar app elevation="0" absolute clipped-left>
      
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
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