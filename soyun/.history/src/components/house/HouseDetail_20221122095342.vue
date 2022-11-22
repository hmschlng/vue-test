<template>
  <v-main>
       <v-row>
      <v-spacer />
      <v-col :cols="mainWidth">
        <the-banner></the-banner>
      </v-col>
      <v-spacer />
    </v-row>
    <the-footer></the-footer>
  </v-main>
</template>

<script>
import TheFooter from "../layout/TheFooter.vue"
export default {
    name: "HouseDetail"
  components: { TheFooter },

}
</script>

<style>

</style>