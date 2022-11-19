<template>
  <v-app>
    <the-header></the-header>
    <router-view></router-view>
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

<style scoped>
html {
  overflow-y: hidden !important;
}
</style>