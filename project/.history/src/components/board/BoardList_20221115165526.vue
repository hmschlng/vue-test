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
        this.type = this.$store.state.type;
        console.log(this.type);
    },
    updated() {
        this.type = this.$store.state.type;
        console.log();
    },
}
</script>

<style>

</style>