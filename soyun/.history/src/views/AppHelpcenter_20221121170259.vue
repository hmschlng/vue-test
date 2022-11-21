<template>
  <v-main>
    <div style="background-color:black">
      <v-card id="board">
        <v-card-title class="text-center justify-center py-6">
          <h1 class="font-weight-bold ma-5">
            {{ tabs[tab] }}
          </h1>
        </v-card-title>
        <v-row>
          <v-spacer />
          <v-col :cols="mainWidth" class="pa-0">
            <v-tabs v-model="tab" grow>
              <v-tab v-for="(tab, index) in tabs" :key="index" @click="clickTab(index)">
                {{ tab }}
              </v-tab>
            </v-tabs>
          </v-col>
          <v-spacer />
        </v-row>
      </v-card>

    </div>
    <v-row>
      <v-spacer />
      <v-col :cols="mainWidth">
        <router-view></router-view>
      </v-col>
      <v-spacer />
    </v-row>
  </v-main>
</template>

<script>
export default {
  name: "AppHelpcenter",
  data() {
    return {
      mainWidth: this.$store.state.mainStore.mainWidth,
      tab: 0,
      tabs: ["1:1문의", "FAQ"],
      links: ["qna", "faq"],
    };
  },
  methods: {
    clickTab(selectedTab) {
      this.$router.replace({
        name: this.links[selectedTab],
      });
    },
  },
};
</script>

<style scoped>

# {
  background-image: url("@/assets/helpcenter.png");
  background-size: cover;
}
</style>
