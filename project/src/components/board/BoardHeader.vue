<template>
  <div>
    <h2>BoardHeader</h2>
    <v-btn @click="a('1')">정보 공유</v-btn>
    <v-btn @click="a('2')">우리 동네</v-btn>
  </div>
</template>

<script>
export default {
    name: "BoardHeader",
    methods: {
        a(type){
            this.$store.commit("SET_TYPE", type);
            this.$router.go({
                name: "boardlist",
            });
        }
    },
};
</script>

<style>

</style>