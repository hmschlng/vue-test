<template>
  <!-- <div>
    <h2>BoardHeader</h2>
    <button @click="a('1')">정보 공유</button>
    <button @click="a('2')">우리 동네</button>
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
    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in tabs"
        :key="item.type"
      >
        <v-card
          color="basil"
          flat
        >
          <!-- <v-card-text>{{ tab }}</v-card-text> -->
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
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
    updated() {
      console.log("Test", this.tab);  
      this.$router.go({
                name: "boardlist",
      });
    },
    methods: {
        a(type){
            this.$store.commit("SET_TYPE", type);
            this.$router.go({
                name: "boardlist",
            });
        },
    },
};
</script>

<style>

</style>