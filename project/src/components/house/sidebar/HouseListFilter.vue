<template>
  <v-app-bar id="listFilter"
  color="grey lighten-4"
  elevation="3"
  >
    <v-btn-toggle id="listFilter"
      group
      dense
    >
      <v-btn
      >
        최신순
      </v-btn>

      <v-btn @click="toggleArrow">
        가격순
        <v-icon>{{arrow}}</v-icon>
      </v-btn>

      <v-btn>
        면적순
      </v-btn>
    </v-btn-toggle>
  </v-app-bar>
</template>

<script>
export default {
  name: "HouseListFilter",
  data() {
    return {
      arrow: "mdi-arrow-up-thin"
    };
  },
  methods: {
    toggleArrow() {
      if (this.arrow === "mdi-arrow-up-thin") {
        this.arrow = "mdi-arrow-down-thin";
      }
      else {
        this.arrow = "mdi-arrow-up-thin";
      }
    },
  }
}
</script>

<style scope>
  #listFilter > button {
    border: 1px solid gainsboro;
    border-radius: 5px;
  }
</style>