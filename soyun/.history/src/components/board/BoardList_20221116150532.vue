<template>
<div>
    <h2>BoardList {{ printTab }}</h2>
    <v-col>
        <v-row>
            <v-btn>글작성</v-btn>
            <board-search></board-search>
        </v-row>
        

    </v-col>
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
            // this.type = this.$store.state.type;
            return this.$store.state.type;
        }
    }
}
</script>

<style>

</style>