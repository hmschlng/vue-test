<template>
  <v-navigation-drawer
    app
    permanent
    fixed
    clipped
    elevation="2"
    width="330px"
    relative
  >
    <house-list-filter></house-list-filter>
    <house-list></house-list>
  </v-navigation-drawer>
</template>

<script>
import HouseList from "@/components/house/sidebar/HouseList";
import HouseListFilter from "@/components/house/sidebar/HouseListFilter";

export default {
  name: "HouseSidebar",
  components: {
    HouseList,
    HouseListFilter,
  },
};
</script>

<style scoped>
::v-deep ::-webkit-scrollbar {
  width: 0;
  background-color: transparent;
}
#houseSideBar {
  z-index: 3;
}
</style>
