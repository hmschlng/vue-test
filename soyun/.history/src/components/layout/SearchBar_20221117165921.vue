<template>
<div>
  <v-row class="ma-2 pa-2" align="center">
    <v-col md="3">
      <v-select
        v-model="select"
        :items="getOptions"
        solo
        hide-details
      ></v-select>
    </v-col>
    <v-col md="7">
      <v-text-field 
        v-model="word" 
        type="text" 
        outlined 
        hide-details ></v-text-field>
    </v-col>
    <v-col md="2">
      <v-btn width="100%">검색</v-btn>
    </v-col>
  </v-row>
</div>
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