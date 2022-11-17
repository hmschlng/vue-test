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
  <v-row class="ma-5 red" >
    <v-col> <v-select
          :items="getOptions"
          :label="getOptionLabel"
          solo
        ></v-select></v-col>
    <v-col><v-text-field v-model="word" type="text" outlined ></v-text-field></v-col>
    <v-col><v-btn >검색</v-btn></v-col>
  </v-row>
  <v-row class="ma-5 red" >
    <v-select
          :items="getOptions"
          :label="getOptionLabel"
          solo
        ></v-select>
    <v-col><v-text-field v-model="word" type="text" outlined ></v-text-field></v-col>
    <v-col><v-btn >검색</v-btn>
  </v-row>

      </div>
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