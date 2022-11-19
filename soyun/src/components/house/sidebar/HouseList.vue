<template>
  <div id="houseList">
    <v-list>
      <v-list-item-group v-model="model">
        <house-list-item></house-list-item>
        <house-list-item></house-list-item>
        <house-list-item></house-list-item>
        <house-list-item></house-list-item>
      </v-list-item-group>
    </v-list>
    <!-- <house-detail></house-detail> -->
  </div>
</template>

<script>
import HouseListItem from "@/components/house/sidebar/HouseListItem";
// import HouseDetail from "@/components/house/sidebar/HouseDetail";
export default {
  name: "HouseList",
  data() {
    return {
      model: null,
    };
  },
  components: {
    HouseListItem,
    // HouseDetail
  },
};
</script>

<style scoped>
#houseList {
  position: relative;
  top: 54px;
  padding: 10px;
  z-index: -1;
}
</style>
