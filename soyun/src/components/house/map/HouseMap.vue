<template>
  <v-container id="mapContainer"
  fluid
  >
    <house-map-filter></house-map-filter>
    <v-img id="tempimg"
    src="@/assets/tempmap.png"
    ></v-img>
  </v-container>
</template>

<script>
import HouseMapFilter from "@/components/house/map/HouseMapFilter";

export default {
  name: "HouseMap",
  components: {
    HouseMapFilter,
  }
}
</script>

<style>
  #mapContainer {
    padding: 0;
  }
  #tempimg {
    height: 805px;
  }
</style>