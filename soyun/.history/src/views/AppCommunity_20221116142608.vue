<template>
  <v-main>
    <board-header></board-header>
    <router-view></router-view>
  </v-main>
</template>

<script>
import BoardHeader from "@/components/board/BoardHeader";
// import BoardList from "@/components/board/BoardList.vue";

export default {
  name: "AppCommunity",
  // components: {
  //   BoardHeader,
  // },
   data () {
      return {
        tab: 0,
        tabs: [
          {
            type: 0,
            title: "정보 공유"
          },
          {
            type: 1,
            title: "우리 동네"
          },
        ],
     }
    },
    methods: {
      clickTab() {
      console.log("Test", this.tab); 
      this.$store.commit("SET_TYPE", this.tab);
        this.$router.go({
            name: "boardlist",
                
        });
      }
    }
};
</script>

<style>

</style>