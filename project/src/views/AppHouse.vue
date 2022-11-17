<template>
  <v-main>
    <house-sidebar></house-sidebar>
    <house-map></house-map>
  </v-main>
</template>

<script>
import HouseSidebar from "@/components/house/sidebar/HouseSidebar";
import HouseMap from "@/components/house/map/HouseMap";

export default {
  name: "AppHouse",
  components: {
    HouseSidebar,
    HouseMap
  }
};
</script>

<style>

</style>