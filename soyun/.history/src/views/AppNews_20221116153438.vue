<template>
  <v-main>
    <h2>AppNews</h2>
    <the-search></the-search>
  </v-main>
</template>

<script>
import TheSearch from "@/components/layout/TheSearch.vue"
export default {
  name: "AppNews",
  data() {
    return {
      
    };
    word: null
  },
  components: {
    TheSearch
  }
}
</script>

<style>

</style>