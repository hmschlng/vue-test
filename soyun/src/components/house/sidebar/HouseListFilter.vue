<template>
  <v-app-bar id="listFilter" color="grey lighten-4" elevation="3" outlined permanent fixed>
    <v-btn-toggle id="listFilter" group dense>

      <v-btn @click="toggleArrow">
        가격순
        <v-icon>{{ arrow }}</v-icon>
      </v-btn>

      <v-btn> 면적순 </v-btn>

      <v-btn> 준공년도순 </v-btn>
    </v-btn-toggle>
  </v-app-bar>
</template>

<script>
export default {
  name: "HouseListFilter",
  data() {
    return {
      arrow: "mdi-arrow-up-thin",
    };
  },
  methods: {
    toggleArrow() {
      if (this.arrow === "mdi-arrow-up-thin") {
        this.arrow = "mdi-arrow-down-thin";
      } else {
        this.arrow = "mdi-arrow-up-thin";
      }
    },
  },
};
</script>

<style scoped>
#houseListFilter {
  z-index: 0;
}
#listFilter > button {
  border: 1px solid gainsboro;
  border-radius: 5px;
}
</style>

