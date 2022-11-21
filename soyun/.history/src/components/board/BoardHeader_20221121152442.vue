<template>
  <v-card id="tab">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold ma-5">
        {{ tabs[tab] }}
      </h1>
    </v-card-title>
    <v-row>
      <v-spacer />
      <v-col :cols="mainWidth" class="pa-0">
        <v-tabs  v-model="tab" color="grey" grow>
          <v-tab v-for="(tab, index) in tabs" :key="index" @click="clickTab(index)" style="border: 1px solid gainsboro">
            {{ tab }}
          </v-tab>
        </v-tabs>
      </v-col>
      <v-spacer />
    </v-row>
  </v-card>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "BoardHeader",
  data() {
    return {
      mainWidth: this.$store.state.mainStore.mainWidth,
      tab: this.$store.state.boardStore.communityTab,
      tabs: ["정보 공유", "우리 동네"],
    };
  },
  methods: {
    ...mapMutations("boardStore", ["SET_COMMUNITY_TAB"]),
    clickTab(selectedTab) {
      this.SET_COMMUNITY_TAB(selectedTab);
    },
  },
};
</script>

<style>
#tab {
background-color: purple;
}
</style>
