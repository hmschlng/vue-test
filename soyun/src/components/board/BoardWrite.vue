<template>
  <v-main>
    <v-row>
      <v-spacer />
      <v-col :cols="mainWidth">
        <h2 class="my-10 text-center">글등록</h2>
        <board-input-item type="register"></board-input-item>
      </v-col>
      <v-spacer />
    </v-row>
  </v-main>
</template>

<script>
import BoardInputItem from "@/components/board/item/BoardInputItem";

export default {
  name: "BoardWrite",
  components: {
    BoardInputItem
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