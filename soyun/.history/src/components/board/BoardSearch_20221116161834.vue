<template>
  <div>
    <v-row>
      <select v-model="key" >
        <option v-for="option in options" :key="option.value" value="option.value">{{option.name}}</option>
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
      options: [
        {
          value:"title",
          name: "제목",
          selected: "selected"
        },
        {
          value:"contents",
          name: "내용",
          selected: "selected"
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