<template>
  <div>
    <h2>AppCommunity</h2>
    <board-header></board-header>
    <router-view></router-view>
    <!-- <board-list></board-list> -->
  </div>

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