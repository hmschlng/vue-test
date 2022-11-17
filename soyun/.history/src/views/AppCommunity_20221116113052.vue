<template>
  <!-- <div>
    <board-header></board-header>
    <router-view></router-view>
  </div> -->
  <v-card>
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold">
        {{tabs[tab].title}}
      </h1>
    </v-card-title>
    <v-tabs
      v-model="tab"
      color="grey"
      grow
    >
      <v-tab
        v-for="item in tabs"
        :key="item.type"
      >
        {{ item.title }}
      </v-tab>
    </v-tabs>
    <router-view></router-view>
    <!-- <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in tabs"
        :key="item.type"
      >
        <v-card
          color="red"
          flat
        >
          <v-card-text>{{ tab }}</v-card-text>
          <board-list></board-list>
        </v-card>
      </v-tab-item>
    </v-tabs-items> -->
  </v-card>
</template>

<script>
// import BoardList from "@/components/board/BoardList.vue";
// import BoardHeader from "@/components/board/BoardHeader";

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
      updated() {
      console.log("Test", this.tab); 
      this.$store.commit("SET_TYPE", this.tab);
        this.$router.go({
                name: "boardlist",
            });
    },
};
</script>

<style>

</style>