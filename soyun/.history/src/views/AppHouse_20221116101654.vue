<template>
  <v-app>
    <v-navigation-drawer app permanent clipped fixed>
      <house-sidebar></house-sidebar>
    </v-navigation-drawer>    
    <v-container fluid>
      <house-map></house-map>
    </v-container>
  </v-app>
  <!-- <div class="red h-100" style="height: 100%">
    <v-subheader class="white">
      <house-filter></house-filter>
    </v-subheader>
    <v-row class="pink" no-gutters>
        <house-sidebar class="blue"></house-sidebar>
        <house-map class="yellow flex"></house-map>
    </v-row>
  </div> -->
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