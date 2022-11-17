<template>
  <v-main>
    <h2>AppNews</h2>
    <search-bar></search-bar>
    <board-list></board-list>
  </v-main>
</template>

<script>
import BoardList from "@/components/board/BoardList";
import SearchBar from "@/components/layout/SearchBar.vue";

export default {
  name: "AppNews",
  components: {
    BoardList,
    SearchBar
  },
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
      ]
    };
  },
  created() {
    console.log("test");
    this.$store.commit("SET_OPTIONS", this.options);
  }
}
</script>

<style>

</style>