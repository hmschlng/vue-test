<template>
  <v-main>
    <video muted autoplay loop>
      <source src="@/assets/main.mp4" type="video/mp4" />
    </video>
    <v-overlay z-index="0">
      
    </v-overlay>
  </v-main>
</template>

<script>
export default {
  name: "MemberFindPw",
  data() {
    return {
      emailId: null,
      password: null,
      svid: null,
    };
  },
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
