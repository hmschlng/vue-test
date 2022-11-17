<template>
  <v-row class="ma-5">
      <select v-model="key" class="ma-2 pa-2" style="outline: 1px solid grey;">
        <option value="title" selected>제목</option>
        <option value="contents" >내용</option>
        <option value="author" >작성자</option>
      </select>
      <input v-model="word" type="text" class="flex ma-2 pa-2" style="outline: 1px solid grey;"/>
      <-btn large class="ma-2">검색</-btn>
  </v-row>
</template>

<script>

export default {
  name: "BoardSearch",
  data() {
    return {
      key: null,
      word: "",
    };
  }
}
</script>

<style>

</style>