<template>
<!-- <v-row
        :align="align"
        no-gutters
        style="height: 150px;"
      >
        <v-col
          v-for="n in 3"
          :key="n"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
            One of three columns
          </v-card>
        </v-col>
      </v-row> -->
      <div>

  <v-row class="ma-5" align="center">
    <v-select
        v-model="select"
        :items="getOptions"
        solo
        hide-details
        class="ma-2"
      ></v-select>
    <v-text-field 
      v-model="word" 
      type="text" 
      outlined 
      hide-details
      class="ma-2" ></v-text-field>
    <v-btn class="ma-2" >검색</v-btn>
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
      console.log("getOptions", this.$store.state.options);
      return this.$store.state.options;
    },
  }
}
</script>

<style>
/* .v-messages input {
    display: none;
} */
</style>