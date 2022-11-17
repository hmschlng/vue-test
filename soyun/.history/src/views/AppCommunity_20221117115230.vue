<template>
  <v-main>
    <board-header></board-header>

    <router-view></router-view>
  </v-main>
</template>

<script>
import BoardHeader from "@/components/board/BoardHeader.vue";

export default {
  name: "AppCommunity",
  components: { BoardHeader },
};
</script>

<style>

</style>