<template>
  <v-overlay z-index=0 >
    <v-card></v-card>
          <v-btn v-show="!isShow" color="success" @click="a">
            매물	검색하러 가기
          </v-btn>
          <house-search v-show="isShow"></house-search>
  </v-overlay>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>