<template>
  <v-main>
  <video muted autoplay loop>
      <source src="@/assets/main.mp4" type="video/mp4" />
    </video>
    <v-overlay z-index="0">
      <router-view></router-view>
    </v-overlay>
  </v-main>
</template>

<script>
export default {
  name: "AppMember",
};
</script>

<style scoped>
video {
  position: fixed;
  object-fit: fill;
}
html {
  overflow: hidden !important;
}
</style>