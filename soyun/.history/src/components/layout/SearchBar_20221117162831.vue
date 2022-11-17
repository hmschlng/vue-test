<template>
  <v-row class="ma-5" align="center" justify="center">
    <v-col style="width: 50px" >
      <v-select
        v-model="select"
        :items="getOptions"
        solo
        hide-details
      ></v-select>
    </v-col>
    <v-col style="width: 300px" >
      <v-text-field 
        v-model="word" 
        type="text" 
        outlined 
        hide-details
        class="ma-2" ></v-text-field>
    </v-col>
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