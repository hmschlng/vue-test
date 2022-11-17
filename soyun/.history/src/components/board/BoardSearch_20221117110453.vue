<template>
  <v-row class="ma-5">
      <select v-model="key" class="yellow ma-2 pa-2">
        <option v-for="option in options" :key="option.value" value="option.value">{{option.name}}</option>
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
      options: [
        {
          value:"0",
          name: "선택",
        },
        {
          value:"title",
          name: "제목",
        },
        {
          value:"contents",
          name: "내용",
        },
        {
          value:"author",
          name: "작성자",
        },
      ],
      word: "",
    };
  }
}
</script>

<style>

</style>