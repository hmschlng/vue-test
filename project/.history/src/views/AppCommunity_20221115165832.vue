<template>
  <div>
    <h2>AppCommunity</h2>
    <board-header></board-header>
    <board-list></board-list>
  </div>

</template>

<script>
import BoardHeader from "@/components/board/BoardHeader";
import BoardList from "@/components/board/BoardList";

export default {
  name: "AppCommunity",
  components: {
    BoardHeader ,
    BoardList
  }
};
</script>

<style>

</style>