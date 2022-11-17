<template>
<div>
    <h2>BoardList</h2>
    <!-- <div>{{ type }}</div> -->
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
    }
}
</script>

<style>

</style>