<template>
  <!-- <div>
    <h2>BoardHeader</h2>
    <button @click="a('1')">정보 공유</button>
    <button @click="a('2')">우리 동네</button>
  </div> -->
<v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h2 basil--text">
        BASiL
      </h1>
    </v-card-title>

    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      grow
    >
      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card
          color="basil"
          flat
        >
          <v-card-text>{{ text }}</v-card-text>
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
        tab: null,
        tabs: [
          {
            type: 1,
            title: "정보 공유"
          },
          {
            type: 2,
            title: "우리 동네"
          },
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
    created() {
      this.tab = this.tabs[0].title;
    },
    computed: {
      checkTab() {
        return this.tab;    
      }
    },
    methods: {
        a(type){
            this.$store.commit("SET_TYPE", type);
            this.$router.go({
                name: "boardlist",
            });
        }
    },
};
</script>

<style>

</style>