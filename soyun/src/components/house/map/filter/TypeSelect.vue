<template>
  <v-btn-toggle id="listFilter"
  group
  dense
  mandatory
  >
    <v-btn>아파트</v-btn>
    <v-btn>주택</v-btn>
  </v-btn-toggle>
</template>

<script>
export default {

}
</script>

<style scoped>
#listFilter > button {
  border: 1px solid gainsboro;
  border-radius: 5px;
}
</style>