<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex v-for="n in 30" :key="n" xs4>
        <news-list-item></news-list-item>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import NewsListItem from "@/components/news/NewsListItem";
export default {
  components: { NewsListItem },
};
</script>

<style>
</style>