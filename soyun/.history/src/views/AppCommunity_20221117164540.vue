<template>
  <v-main>
    <v-card>
      <board-header></board-header>
      <v-row align="center" justify="space-between">
        <v-btn large>글작성</v-btn>
        <search-bar></search-bar>
      </v-row>
      <router-view></router-view>
    </v-card>
  </v-main>
</template>

<script>
import BoardHeader from "@/components/board/BoardHeader.vue";
import SearchBar from "@/components/layout/SearchBar.vue";

export default {
  name: "AppCommunity",
  components: { BoardHeader, SearchBar },
  data() {
    return {
      options: [
        {
          text:"제목",
          value:"title",
        },
        {
          text:"내용",
          value:"contents"
        },
        {
          text:"작성자",
          value:"author"
        },
      ]
    };
  },
  created() {
    this.$store.commit("SET_OPTIONS", this.options);
  }
};
</script>

<style>

</style>