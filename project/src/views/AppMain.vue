<template>
  <v-main>
    <v-container fluid >
      <video muted autoplay loop>
        <source src="@/assets/main.mp4" type="video/mp4" />
      </video>
      <div>
        <div>
          WHERE IS MY HOME
        </div>
        <v-btn href="#">
          매물	검색하러 가기
        </v-btn>
      </div>
    </v-container>
  </v-main>
</template>

<script>
export default {

}
</script>

<style>
  video {
    height: 100%;
    width: 100%;
    opacity: 0.7;
  }
</style>