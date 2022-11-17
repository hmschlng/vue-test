<template>
  <v-main>
    <board-header></board-header>
    <search-bar></search-bar>
    <router-view></router-view>
  </v-main>
</template>

<script>
import BoardHeader from "@/components/board/BoardHeader.vue";
import SearchBar from "@/components/layout/SearchBar.vue";

export default {
  name: "AppCommunity",
  components: { BoardHeader, SearchBar },
  data() {
    return {
      options: ["제목"]
    };
  },
  created() {
    this.$store.commit("SET_OPTIONS", this.options);
  }
};
</script>

<style>

</style>