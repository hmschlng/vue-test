<template>
  <div>
    <v-row class="my-4">
      <v-spacer />
      <search-bar></search-bar>
      <v-spacer />
    </v-row>
    <board-list></board-list>
    <div class="text-center my-8">
      <v-pagination v-model="page" :length="10" @input="clickPage"></v-pagination>
    </div>
  </div>
</template>

<script>
import BoardList from "@/components/board/BoardList";
export default {
  name: "NoticeMain",
  components: [BoardList],
};
</script>

<style></style>
