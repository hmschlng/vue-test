<template>
  <v-main>
    <board-header></board-header>
    <board-search></board-search>
    <router-view></router-view>
  </v-main>
</template>

<script>
import BoardHeader from "@/components/board/BoardHeader.vue";
import BoardSearch from "@/components/board/BoardSearch.vue";

export default {
  name: "AppCommunity",
  components: { BoardHeader, BoardSearch },
};
</script>

<style>

</style>