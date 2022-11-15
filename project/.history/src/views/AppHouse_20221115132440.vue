<template>
  <div>
    <h2>AppHouse</h2>
    <house-sidebar></house-sidebar>
    <house-map
  </div>
</template>

<script>
import HouseSidebar from "@/components/house/sidebar/HouseSidebar";
import HouseMap from "@/components/house/map/HouseMap";
import HouseSidebar from "@/components/house/sidebar/HouseSidebar.vue";

export default {
  name: "AppHouse",
  components: {
    HouseSidebar,
    HouseMap
    HouseSidebar
  }
};
</script>

<style>

</style>