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
            type: this.$store.state.type,
        }
    },
    updated() {
        this.type = this.$store.state.type;
        console.log("updated", this.type);
    },
    components: {
        BoardSearch
    }
}
</script>

<style>

</style>