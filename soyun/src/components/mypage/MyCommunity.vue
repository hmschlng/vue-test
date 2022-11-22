<template>
  <div class="pa-4">
    <v-tabs v-model="tab" color="grey">
      <v-tab v-for="(tab, index) in tabs" :key="index" @click="clickTab(index)">
        {{ tab }}
      </v-tab>
    </v-tabs>
    <v-container class="pa-6">
      <board-list></board-list>
    </v-container>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import BoardList from "@/components/board/BoardList";

export default {
  name: "MyCommunity",
  components: { BoardList },
  data() {
    return {
      mainWidth: this.$store.state.mainStore.mainWidth,
      tab: this.$store.state.boardStore.categoryTab,
      tabs: ["정보 공유", "우리 동네"],
    };
  },
  methods: {
    ...mapMutations("boardStore", ["SET_CATEGORY_TAB"]),
    clickTab(selectedTab) {
      this.SET_CATEGORY_TAB(selectedTab);
    },
  },
};
</script>

<style>
</style>