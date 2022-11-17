<template>
<div>
    <h2>BoardList</h2>
    <div>{{ type }}</div>
    <v-textarea value="type"/>
    <board-search></board-search>
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
    components: {
        BoardSearch
    }
}
</script>

<style>

</style>