<template>
  <v-main>
    <board-header></board-header>
    <router-view></router-view>
  </v-main>
</template>

<script>
import BoardHeader from "@/components/board/BoardHeader.vue";

export default {
  components: { BoardHeader },
  name: "AppCommunity",
};
</script>

<style>

</style>