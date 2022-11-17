<template>
  <v-row class="ma-2 pa-2" align="center">
    <v-col cols="1">
      <v-select
        v-model="select"
        :items="getOptions"
        solo
        hide-details
      ></v-select>
    </v-col>
    <v-col cols="1">
      <v-text-field 
        v-model="word" 
        type="text" 
        outlined 
        hide-details ></v-text-field>
    </v-col>
    <v-col>
      <v-btn>검색</v-btn>
    </v-col>
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