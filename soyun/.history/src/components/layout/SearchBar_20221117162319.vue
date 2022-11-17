<template>
  <v-row class="ma-5" align="center" style="">
    <v-container style="width: 150px" >
      <v-select
        v-model="select"
        :items="getOptions"
        solo
        hide-details
      ></v-select>
    </v-container>
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
      return this.$store.state.options;
    },
  }
}
</script>

<style>

</style>