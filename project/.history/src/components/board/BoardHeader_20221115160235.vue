<template>
  <div>
    <h2>BoardHeader</h2>
    <router-link :to="{ name: 'main' }" > 로고</router-link>
    <router-link :to="{ name: 'map'}" > 지도</router-link>
    <button @click="a('1')">정보 공유</button>
    <button @click="a('2')">우리 동네</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>