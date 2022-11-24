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
      option: this.$store.state.boardStore.option,
      keyword: this.$store.state.boardStore.keyword,
    };
  },
  computed: {
    getOptions() {
      return this.$store.state.boardStore.searchOptions;
    },
  },
  methods: {
    ...mapMutations("boardStore", ["SET_OPTION", "SET_KEYWORD", "SET_PGNO"]),
    search() {
      this.SET_OPTION(this.option);
      this.SET_KEYWORD(this.keyword);
      this.SET_PGNO(1);
      this.$router.go({
        name: "boardlist",
      });
    },
  },
};
</script>

<style>
.search {
  height: 50px;
}
</style>
