<template>
  <v-app-bar id="mapFilter"
  color="grey lighten-4"
  elevation="3"
  absolute
  fixed
  outlined
  >
    <type-select></type-select>

    <v-divider id="filterDivider" inset vertical></v-divider>

    <!-- 지역 선택 -->
    <location-select></location-select>

    <v-spacer />

    <!-- 검색창 -->
    <search-bar></search-bar>
    <search-button></search-button>
  </v-app-bar>
</template>

<script>
import TypeSelect from "@/components/house/map/filter/TypeSelect";
import SearchBar from "@/components/house/map/filter/SearchBar";
import SearchButton from "@/components/house/map/filter/SearchButton";
import LocationSelect from "@/components/house/map/filter/LocationSelect";

export default {
  name: "HouseMapFilter",
  components: {
    TypeSelect,
    LocationSelect,
    SearchBar,
    SearchButton,
  },
};
</script>

<style scoped>
#mapFilter #filterDivider {
  padding-right: 5px;
  padding-left: 5px;
  margin-right: 10px;
}
#mapFilter {
  width: 100%;
  z-index: 2;
  padding-top: 0px;
}
</style>