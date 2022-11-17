<template>
<div>
    <h2>BoardList</h2>
    <div>{{ printTab }}</div>
    <board-search></board-search>
</div>
</template>

<script>
import BoardSearch from "@/components/board/BoardSearch";
export default {
    name: "BoardList",
    data() {
        return {
            type: 0,
        }
    },
    components: {
        BoardSearch
    },
    computed: {
        printTab(){
            return this.$store.state.type;
        }
    }
}
</script>

<style>

</style>