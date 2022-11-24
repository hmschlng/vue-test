<template>
  <v-row class="my-4">
          <v-spacer />
          <search-bar></search-bar>
          <v-spacer />
        </v-row>
        <router-view></router-view>
        <div class="text-center my-8">
          <v-pagination v-model="page" :length="10" @input="clickPage"></v-pagination>
        </div>
</template>

<script>
export default {

}
</script>

<style>

</style>