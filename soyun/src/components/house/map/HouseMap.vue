<template>
  <v-container id="mapContainer"
  fluid
  >
    <house-map-filter></house-map-filter>
    <kakao-map></kakao-map>
  </v-container>
</template>

<script>
import HouseMapFilter from "@/components/house/map/HouseMapFilter";
import KakaoMap from "@/components/house/map/KakaoMap";

export default {
  name: "HouseMap",
  components: {
    HouseMapFilter,
    KakaoMap,
  }
};
</script>

<style scoped>
#mapContainer {
  padding: 0;
}
</style>