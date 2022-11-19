<template>
  <v-card height="100vh" class="pa-6">
    <h1 class="text-center">마이페이지</h1>
    <v-container class="pa-6">
      <v-avatar size="100%">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
    </v-container>
    <v-divider></v-divider>
    <v-tabs v-model="tab" color="grey" vertical>
      <v-tab v-for="(tab, index) in tabs" :key="index" @click="clickTab(index)">
        {{ tab }}
      </v-tab>
    </v-tabs>
    <v-divider></v-divider>
  </v-card>
</template>

<script>
export default {
  name: "MypageSidebar",
  components: {},
  data() {
    return {
      tab: this.$store.state.communityTab,
      tabs: ["내정보", "찜 목록", "내글 목록"],
      links: [
          "mypage",
          "wishlist",
          "mycommunity"
      ]
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
</style>