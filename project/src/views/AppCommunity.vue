<template>
  <v-main>
    <h2>AppCommunity</h2>
    <board-header></board-header>
    <router-view></router-view>
  </v-main>

</template>

<script>
import BoardHeader from "@/components/board/BoardHeader";

export default {
  name: "AppCommunity",
  components: {
    BoardHeader,
  },
};
</script>

<style>

</style>