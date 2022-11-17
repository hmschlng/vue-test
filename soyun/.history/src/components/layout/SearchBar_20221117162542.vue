<template>
  <v-row class="ma-5" align="center" justify="center">
    <v-container style="width: 150px" >
      <v-select
        v-model="select"
        :items="getOptions"
        solo
        hide-details
      ></v-select>
    </v-container>
    <v-container style="width: 300px" >
      <v-text-field 
        v-model="word" 
        type="text" 
        outlined 
        hide-details
        class="ma-2" ></v-text-field>
    </v-container>
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