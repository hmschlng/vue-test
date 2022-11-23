<template>
  <div>
    <v-row class="my-1 pa-1" align="center">
      <v-col cols="3" class="pa-1">
        <v-select
          v-model="option"
          :items="getOptions"
          dense
          outlined
          hide-details
        ></v-select>
      </v-col>
      <v-col cols="7" class="pa-2">
        <v-text-field
          v-model="keyword"
          type="text"
          outlined
          hide-details
          dense
        ></v-text-field>
      </v-col>
      <v-col cols="2" class="pa-1">
        <v-btn color="primary" width="100%" @click="search">검색</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "BoardSearch",
  data() {
    return {
      option: {
        text: "제목",
        value: "title",
      },
      keyword: "",
    };
  },
  computed: {
    getOptions() {
      return this.$store.state.boardStore.searchOptions;
    },
  },
  methods: {
    ...mapMutations("boardStore", ["SET_OPTION", "SET_KEYWORD"]),
    search() {
this.SET_CATEGORY_TAB(selectedTab);
    }
  }
};
</script>

<style>
.search {
  height: 50px;
}
</style>