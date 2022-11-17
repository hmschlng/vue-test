<template>
<div>
    <h2>List {{ printTab }}</h2>
    <board-search></board-search>
    <v-simple-table>
    <template v-slot:default>
    <thead>
        <tr>
            <th v-for="header in headers" :key="header">{{header}}</th>
        </tr>
    </thead>
    <tbody>
        <board-list-item v-for="item in 5" :key="item"></board-list-item>
    </tbody>
    </template>
    </v-simple-table>
</div>
</template>

<script>
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