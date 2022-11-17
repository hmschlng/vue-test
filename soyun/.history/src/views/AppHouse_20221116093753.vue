<template>
  <!-- <v-app>
    <v-app-bar class="green">
      <house-filter class="white"></house-filter>
    </v-app-bar>
      <v-navigation-drawer
        permanent>
        <house-sidebar class="blue"></house-sidebar>
      </v-navigation-drawer>
      <house-map class="yellow"></house-map>
  </v-app> -->
  <div class="red style=" height: 100%">
    <v-subheader class="white">
      <house-filter></house-filter>
    </v-subheader>
    <v-row class="flex pink" no-gutters>
        <house-sidebar class="blue"></house-sidebar>
        <house-map class="yellow flex"></house-map>
      </v-row>
  </div>
</template>

<script>
import HouseFilter from "@/components/house/HouseFilter";
import HouseSidebar from "@/components/house/sidebar/HouseSidebar";
import HouseMap from "@/components/house/map/HouseMap";

export default {
  name: "AppHouse",
  components: {
    HouseFilter,
    HouseSidebar,
    HouseMap
  }
};
</script>

<style>

</style>