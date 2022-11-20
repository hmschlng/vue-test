<template>
  <v-app-bar
    id="houseSearch"
    color="grey lighten-4"
    elevation="2"
  >
    <!-- 지역 선택 -->
    <location-select></location-select>
  </v-app-bar>
</template>

<script>
import LocationSelect from "@/components/house/map/filter/LocationSelect";

export default {
  name: "HouseSearch",
  components: {
    LocationSelect,
  },
};
</script>

<style scope>
#houseSearch {
  z-index: 2;
  padding-top: 0px;
  /* border: 1px solid gainsboro;
  border-radius: 5px; */
}
</style>