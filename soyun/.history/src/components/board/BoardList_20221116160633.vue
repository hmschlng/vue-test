<template>
<div>
    <h2>List {{ printTab }}</h2>
    <v-simple-table>
    <template v-slot:default>
    <thead>
        <tr>
            <th class="text-left">
            Name
            </th>
        <th class="text-left">
            Calories
        </th>
        </tr>
    </thead>
    tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
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