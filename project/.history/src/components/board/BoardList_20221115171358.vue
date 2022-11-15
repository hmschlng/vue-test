<template>
  <div>
    <h2>BoardList</h2>
    <board-search></board-search>
    <div>{{ type }}</div>
  </div>
</template>

<script>
import BoardSearch from "@/components/board/BoardSearch";
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
}
</script>

<style>

</style>