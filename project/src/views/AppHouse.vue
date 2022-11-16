<template>
  <v-main>
      <house-sidebar></house-sidebar>
    <v-container fluid>
      <house-map-filter></house-map-filter>
      <house-map></house-map>
    </v-container>
  </v-main>
</template>

<script>
import HouseSidebar from "@/components/house/sidebar/HouseSidebar";
import HouseMapFilter from "@/components/house/map/HouseMapFilter";
import HouseMap from "@/components/house/map/HouseMap";

export default {
  name: "AppHouse",
  components: {
    HouseSidebar,
    HouseMapFilter,
    HouseMap
  }
};
</script>

<style>

</style>