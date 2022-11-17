<template>
  <v-main class="red">
    <v-navigation-drawer app permanent clipped fixed>
      <house-sidebar></house-sidebar>
    </v-navigation-drawer>    
    <v-container fluid>
      <house-map></house-map>
    </v-container>
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