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
import BoardList from "@/components/board/BoardList";

export default {
  name: "MyCommunity",
  components: {  BoardList },
  data() {
    return {
      mainWidth: this.$store.state.mainWidth,
      tab: this.$store.state.communityTab,
      tabs: ["정보 공유", "우리 동네"],
    };
  },
  methods: {
    clickTab(selectedTab) {
      this.$store.commit("SET_COMMUNITY_TAB", selectedTab);
      // this.$router.replace({
      //   name: "boardlist",
      // });
    },
  },
};
</script>

<style>
</style>