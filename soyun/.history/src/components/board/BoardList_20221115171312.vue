<template>
  <div>
    <h2>BoardList</h2>
    sea
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
        console.log("created");
        this.type = this.$store.state.type;
        console.log(this.type);
    },
    updated() {
         console.log("updated");
        this.type = this.$store.state.type;
        console.log(this.type);
    }

}
</script>

<style>

</style>