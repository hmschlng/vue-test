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
        a2();
    },
    computed: {
        a2() {
            this.type = this.$store.state.type;
        }
    },
}
</script>

<style>

</style>