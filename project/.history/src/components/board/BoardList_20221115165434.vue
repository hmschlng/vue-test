<template>
  <div>
    <h2>BoardList</h2>
    <div>{{ type }}</div>
    <div>{{ a2 }}</div>
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
    },
    updated() {
            return this.$store.state.type;
        }
    },
}
</script>

<style>

</style>