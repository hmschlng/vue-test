<template>
  <v-row class="ma-5">
    <v-select
          :items="getOptions"
          :label="getOptionLabel"
          solo
        ></v-select>
         <v-text-field v-model="word" type="text" outlined></v-text-field>
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
      label: null,
      word: "",
    };
  },
  computed: {
    getOptions(){
       console.log("getOptions", this.$store.state.options);
      return this.$store.state.options;
    },
    getOptionLabel(){
      console.log("getOptionLabel", this.$store.state.options[0]);
      return this.$store.state.options[0];
    },
  }
}
</script>

<style>

</style>