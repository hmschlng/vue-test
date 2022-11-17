<template>
    <div>
        <board-header></board-header>
        <board-list></board-list>
    </div>
</template>

<script>
import BoardHeader from "@/com/BoardHeader.vue"
import BoardList from "./BoardList.vue"
export default {
  components: { BoardList },

}
</script>

<style>

</style>