<template>
  <v-main>
    <div>
    <board-header></board-header>
    <v-row>
      <v-spacer />
      <v-col :cols="mainWidth">
        <router-view></router-view>
      </v-col>
      <v-spacer />
    </v-row>
    </div>
    <the-footer></the-footer>
  </v-main>
</template>

<script>
import BoardHeader from "@/components/board/BoardHeader";
import TheFooter from "@/components/layout/TheFooter";
export default {
  components: { BoardHeader, TheFooter },
  name: "AppCommunity",
  data() {
    return {
      mainWidth: this.$store.state.mainStore.mainWidth,
    };
  },
};
</script>

<style>
</style>