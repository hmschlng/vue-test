<template>
  <v-row class="blue justify-space">
      <select v-model="key" class="yellow">
        <option v-for="option in options" :key="option.value" value="option.value">{{option.name}}</option>
      </select>
      <input v-model="word" type="text" class="red flex" />
      <v-btn large>검색</v-btn>
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