<template>
  <div>
    <h2>BoardList</h2>
    <div>{{ type }}</div>
  </div>
</template>

<script>
export default {
    name: "BoardList",
    data() {
        return {
            type: 0
        }
    },
    created() {
        this.type = this.$route.params.type;
        console.log(this.$route);
    },
    computed() {

    },
    methods:{}
}
</script>

<style>

</style>