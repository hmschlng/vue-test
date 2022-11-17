<template>
  <v-main>
    <v-container>
      <board-header></board-header>
      
      <search-bar></search-bar>
      <router-view></router-view>
    </v-container>
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
    console.log("test");
    this.$store.commit("SET_OPTIONS", this.options);
  }
};
</script>

<style>

</style>