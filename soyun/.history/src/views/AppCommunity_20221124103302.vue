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
import { mapMutations } from "vuex";
import BoardHeader from "@/components/board/BoardHeader";
import TheFooter from "@/components/layout/TheFooter";

export default {
  components: { BoardHeader, TheFooter },
  name: "AppCommunity",
  data() {
    return {
      mainWidth: this.$store.state.mainStore.mainWidth,
       options: [
        {
          text: "제목",
          value: "title",
        },
        {
          text: "내용",
          value: "contents",
        },
        {
          text: "작성자",
          value: "author",
        },
      ],
    };
  },
  methods: {
    ...mapMutations("boardStore", ["SET_PGNO", "SET_CATEGORY_TAB"]),
  },
  created() {
    console.log("test00");
    this.SET_SEARCH_OPTIONS(this.options);
    this.SET_CATEGORY_TAB(0);
    this.SET_PGNO(1);
    // this.$router.go({
    //   name: "boardlist",
    // });
  },
};
</script>

<style>
</style>