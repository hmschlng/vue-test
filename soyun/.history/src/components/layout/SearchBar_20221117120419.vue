<template>
  <v-row class="ma-5">
    <v-select
          :items="items"
          label="Solo field"
          solo
        ></v-select>
      <select v-model="key" class="ma-2 pa-2" style="outline: 1px solid grey;">
        <option value="title" selected>제목</option>
        <option value="contents" >내용</option>
        <option value="author" >작성자</option>
      </select>
      <input v-model="word" type="text" class="flex ma-2 pa-2" style="outline: 1px solid grey;"/>
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
      // this.type = this.$store.state.type;
            return this.$store.state.type;
    }
  }
}
</script>

<style>

</style>