<template>
<div>
    <h2>BoardList {{ printTab }}</h2>
    <v-col>
        <v-row>
            <v-btn>글작성</v-btn>
            <board-search></board-search>
        </v-row>
        <template>
            <!--
                I will find you
                ...

                ,and

                I will kill you

            -->
        </template>

    </v-col>
</div>
</template>

<script>
import BoardSearch from "@/components/board/BoardSearch";
import TempProfile from "@/views/TempProfile.vue";
export default {
    name: "BoardList",
    data() {
        return {
            type: 0,
        }
    },
    components: {
        BoardSearch
        TempProfile
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