<template>
  <v-main id="appMain">
    <video muted autoplay loop>
      <source src="@/assets/main.mp4" type="video/mp4" />
    </video>
    <v-overlay z-index="0">
      <v-col align="center">
        <div class="text-h1 font-weight-bold">Where is My Home?</div>
        <v-btn :to="{ name: 'map' }" color="primary" class="ma-8" x-large>
          매물 검색하러 가기
        </v-btn>
      </v-col>
    </v-overlay>
  </v-main>
</template>

<script>
export default {
  name: "AppMain",
};
</script>

<style scoped>
/* #appMain {
  position: absolute;
} */
video {
  position: fixed;
  object-fit: fill;
}
</style>