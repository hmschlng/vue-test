<template>
  <div>
    <v-row>
      <select v-model="key">
        <option v-for></option>
      </select>
      <input v-model="word" type="text"/>
      <v-btn>글작성</v-btn>
    </v-row>
  </div>
</template>

<script>

export default {
  name: "BoardSearch",
  data() {
    return {
      key: null,
      option: [
        {
          value:"title",
          name: "제목"
        },
        {
          value:"contents",
          name: "내용"
        },
        {
          value:"author",
          name: "작성자"
        },
      ],
      word: "",
    };
  }
}
</script>

<style>

</style>