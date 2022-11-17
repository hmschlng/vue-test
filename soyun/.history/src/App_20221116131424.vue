<template>
  <v-app>
    <the-header></the-header>
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