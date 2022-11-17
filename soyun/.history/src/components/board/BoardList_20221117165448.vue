<template>
<div class="ma-10">
    <h2>List {{ getTab }}</h2>
    <v-simple-table>
        <thead>
            <tr>
                <th v-for="header in headers" :key="header">{{header}}</th>
            </tr>
        </thead>
        <tbody>
            <board-list-item v-for="item in 5" :key="item"></board-list-item>
        </tbody>
    </v-simple-table>
</div>
</template>

<script>
import BoardListItem from "@/components/board/item/BoardListItem";

export default {
    name: "BoardList",
    data() {
        return {
            test: 0,
            type: 0,
            headers: [
                "글번호", "제목", "내용", "작성자", "작성일"
            ]
        }
    },
    components: {
        BoardListItem,
    },
    computed: {
        getTab(){
            this
            return this.$store.state.communityTab;
        }
    }
}
</script>

<style>

</style>