<template>
  <div>
      <select v-model="key" >
        <option v-for="option in options" :key="option.value" value="option.value">{{option.name}}</option>
      </select>
      <input v-model="word" type="text" class="w3-input w3-border" />
      <v-btn>검색</v-btn>
  </div>
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