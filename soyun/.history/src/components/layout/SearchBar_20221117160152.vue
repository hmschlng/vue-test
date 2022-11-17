<template>
  <v-row class="ma-5" align="center">
    <v-select
      v-model="select"
      :items="getOptions"
      solo
      hide-details
      class="ma-2"
      style="width: 1%"
    ></v-select>
    <v-text-field 
      v-model="word" 
      type="text" 
      outlined 
      hide-details
      class="ma-2" ></v-text-field>
    <v-btn class="ma-2" >검색</v-btn>
  </v-row>
</template>

<script>

export default {
  name: "BoardSearch",
  data() {
    return {
      select: 
      { 
        text:"제목",
        value:"title",
      },
      word: "",
    };
  },
  computed: {
    getOptions(){
      console.log("getOptions", this.$store.state.options);
      return this.$store.state.options;
    },
  }
}
</script>

<style>

</style>