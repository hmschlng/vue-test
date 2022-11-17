<template>
  <v-main>
    <h2>AppNews</h2>
    <the-search></the-search>
    <board-list></board-list>
  </v-main>
</template>

<script>
import TheSearch from "@/components/layout/TheSearch"
import BoardList from "@/components/board/BoardList"
export default {
  name: "AppNews",
  components: {
    TheSearch,
    BoardList
  }
}
</script>

    BoardList
<style>

</style>