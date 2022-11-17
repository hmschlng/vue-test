<template>
  <!-- <div>
    <h2>BoardHeader</h2>
    <button @click="a('1')">정보 공유</button>
    <button @click="a('2')">우리 동네</button>
  </div> -->
  <v-container>
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
        @click="clickTab(item.type)">
        {{ item.title }}
      </v-tab>
    </v-tabs>
  </v-card>
  </v-container>
</template>

<script>
export default {
    name: "BoardHeader",
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
    // updated() {
    //   console.log("Test", this.tab); 
    //   this.$store.commit("SET_TYPE", this.tab);
    //   this.$router.go({
    //             name: "boardlist",
    //   });
    // },
    methods: {
        clickTab(t){
          console.log("click", t);
          this.$store.commit("SET_TYPE", t);
        },
    },
};
</script>

<style>

</style>