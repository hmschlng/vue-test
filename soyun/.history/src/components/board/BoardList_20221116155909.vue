<template>
<div>
    <h2>BoardList {{ printTab }}</h2>
    <v-col>
        <v-row>
            <v-btn>글작성</v-btn>
            <board-search></board-search>
        </v-row>
        <table>
            <thead>
                <tr>
                    <th v-for="header in headers" :key="header">{{header}}</th>
                </tr>
            </thead>
            <tbody>
                <board-list-item v-for="item in 5" :key="item"></board-list-item>
            </tbody>
        </table>
    </v-col>
</div>
</template>

<script>
import BoardHeader from "@/components/board/BoardHeader";
import BoardSearch from "@/components/board/BoardSearch";
import BoardListItem from "@/components/board/item/BoardListItem";

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
        BoardListItem,
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