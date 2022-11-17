<template>
  <v-row class="ma-5">
    <v-select
          :items="getOptions"
          solo
          input="getOptions[0]"
        ></v-select>
      <input v-model="word" type="text" class="ma-2 pa-2" style="outline: 1px solid grey;"/>
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
  computed: {
    getOptions(){
      return this.$store.state.options;
    }
  }
}
</script>

<style>

</style>