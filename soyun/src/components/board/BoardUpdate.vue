<template>
  <div>
    <h2 class="my-10 text-center">글수정</h2>
    <board-input-item type="update"></board-input-item>
  </div>
</template>

<script>
import BoardInputItem from "@/components/board/item/BoardInputItem";

export default {
  name: "BoardUpdate",
  components: {
    BoardInputItem,
  },
  data() {
    return {
      mainWidth: this.$store.state.mainStore.mainWidth,
    };
  },
};
</script>

<style>
</style>