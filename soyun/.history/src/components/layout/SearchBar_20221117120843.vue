<template>
  <v-row class="ma-5">
    <v-select
          :items="getOptions"
          label="Solo field"
          solo
        ></v-select>
      <input v-model="word" type="text" class="flex ma-2 pa-2" style="outline: 1px solid grey;"/>
      <v-btn large class="ma-2">검색</v-btn>
  </v-row>
</template>

<script>

export default {
  name: "BoardSearch",
  data() {
    return {
      key: null,
      options: [],
      word: "",
    };
  },
  updated: {
    getOptions(){
      return this.$store.state.options;
    }
  }
}
</script>

<style>

</style>