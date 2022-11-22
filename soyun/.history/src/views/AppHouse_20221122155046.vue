<template>
  <router-view></router-view>
</template>

<script>
import HouseSidebar from "@/components/house/sidebar/HouseSidebar";
import HouseMap from "@/components/house/map/HouseMap";

export default {
  name: "AppHouse",
  components: {
    HouseSidebar,
    HouseMap,
  },
};
</script>

<style scoped>
html {
  position: absolute;
}
* {
  overflow: hidden !important;
}
#appHouse {
  width: 100%;
  height: 100%;
}
</style>
