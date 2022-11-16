<template>
  <v-main>
    <v-container fluid>
      <video muted autoplay loop>
        <source src="@/assets/main.mp4" type="video/mp4" />
      </video>
      
      <v-overlay z-index="0">
        <!-- <p id="mainTitle">WHERE IS MY HOME</p> -->
        <v-btn
          color="success"
          x-large
          :to="{name: 'map'}"
        >
          매물	검색하러 가기
        </v-btn>
        <!-- <v-btn href="#">
          
        </v-btn> -->
      </v-overlay>
    </v-container>
  </v-main>
</template>

<script>
export default {

}
</script>

<style scope>
  video {
    width: 100%;
    height: 1000px;
    object-fit: fill;
  }
</style>