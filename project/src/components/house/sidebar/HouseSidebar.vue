<template>
  <v-navigation-drawer
    app 
    permanent 
    clipped 
    fixed
    width="300px"
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
        HouseListFilter
    }
};
</script>

<style>

</style>