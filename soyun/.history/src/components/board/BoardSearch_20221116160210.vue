<template>
  <div>
    <v-row>
      <input v-model="word"/>
      <v-btn>글작성</v-btn>
    </v-row>
  </div>
</template>

<script>
import TheSearch from "@/components/layout/TheSearch"

export default {
  name: "BoardSearch",
  components: { TheSearch },
  data() {
    return {
      word: ""
    };
  }
}
</script>

<style>

</style>