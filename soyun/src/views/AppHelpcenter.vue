<template>
  <v-main id="main">
    <v-card id="helpcenterTab">
      <v-card-title class="text-center justify-center py-6">
        <h1 class="font-weight-bold ma-5 white--text">
          {{ tabs[tab] }}
        </h1>
      </v-card-title>
      <v-row id="tabLine">
        <v-spacer />
        <v-col :cols="mainWidth" class="pa-0">
          <v-tabs
            v-model="tab"
            grow
            background-color="transparent"
            color="primary"
          >
            <v-tab
              v-for="(tab, index) in tabs"
              :key="index"
              @click="clickTab(index)"
              style="border: 1px solid gainsboro"
              class="white--text"
              active-class="primary darken-1"
            >
              {{ tab }}
            </v-tab>
          </v-tabs>
        </v-col>
        <v-spacer />
      </v-row>
    </v-card>
    <v-row>
      <v-spacer />
      <v-col :cols="mainWidth">
        <router-view></router-view>
      </v-col>
      <v-spacer />
    </v-row>
    <the-footer></the-footer>
  </v-main>
</template>

<script>
import TheFooter from "@/components/layout/TheFooter";
export default {
  components: { TheFooter },
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

<style>
#helpcenterTab {
  background-image: url("@/assets/helpcenter.png");
  background-size: cover;
}
#tabLine {
  background-color: rgb(0, 0, 0, 0.5);
}
</style>