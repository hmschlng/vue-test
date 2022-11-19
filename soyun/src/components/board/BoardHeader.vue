<template>
  <v-card>
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold ma-5">
        {{ tabs[tab] }}
      </h1>
    </v-card-title>
    <v-row>
      <v-spacer />
      <v-col :cols="mainWidth" class="pa-0">
        <v-tabs v-model="tab" color="grey" grow>
          <v-tab
            v-for="(tab, index) in tabs"
            :key="index"
            @click="clickTab(index)"
          >
            {{ tab }}
          </v-tab>
        </v-tabs>
      </v-col>
      <v-spacer />
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "BoardHeader",
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