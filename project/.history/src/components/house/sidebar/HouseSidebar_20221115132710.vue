<template>
  <div>
    <h2>HouseSidebar</h2>
    <house-list></house-list>
    <house-list-filter></house-list-filter>
  </div>
</template>

<script>
import HouseList from "@/components/house/sidebar/HouseList";
import HouseListFilter from "@/components/house/sidebar/HouseListFilter;

export default {
  components: { HouseList },
    name: "HouseSidebar"
}
</script>

<style>

</style>