<template>
<div>
    <board-header></board-header>
    <h2>BoardList {{ printTab }}</h2>
    <v-col>
        <v-row>
            <v-btn>글작성</v-btn>
            <board-search></board-search>
        </v-row>
        <v-data-table
            :headers="headers">
            <tbody>
                <board
            </tbody>
        </v-data-table>
    </v-col>
</div>
</template>

<script>
import BoardHeader from "@/components/board/BoardHeader";
import BoardSearch from "@/components/board/BoardSearch";

export default {
    name: "BoardList",
    data() {
        return {
            type: 0,
            headers: [
                "글번호", "제목", "내용", "작성자", "작성일"
            ]
        }
    },
    components: {
        BoardHeader,
        BoardSearch,
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