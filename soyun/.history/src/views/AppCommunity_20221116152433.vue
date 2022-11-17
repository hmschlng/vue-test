<template>
  <v-main>
    <router-view></router-view>
  </v-main>
</template>

<script>
import BoardHeader from "@/components/board/BoardHeader";
// import BoardList from "@/components/board/BoardList.vue";

export default {
  name: "AppCommunity",
  components: {
    BoardHeader,
  },
};
</script>

<style>

</style>