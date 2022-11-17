<template>
  <div>
    <!-- <board-header></board-header> -->
    <router-view></router-view>
  </div>
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
// import BoardHeader from "@/components/board/BoardHeader";

export default {
  name: "AppCommunity",
  // components: {
  //   BoardHeader,
  // },
};
</script>

<style>

</style>