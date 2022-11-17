<template>
  <div>
    <v-row>
      <select v-model="key">
        <option></option>
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
        {value}
      ],
      word: "",
    };
  }
}
</script>

<style>

</style>