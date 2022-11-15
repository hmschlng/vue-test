<template>
  <div>
    <h2>BoardHeader</h2>
    <button @click="a('1')">정보 공유</button>
    <button @click="a('2')">우리 동네</button>
  </div>
</template>

<script>
export default {
    name: "BoardHeader",
    methods: {
        a(type){
            console.log("type",type);
            this
        }
    },
};
</script>

<style>

</style>