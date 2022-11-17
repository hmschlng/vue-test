<template>
<v-row>
    <v-form>
        <input type="text" v-model="word"/>
        button>검색</v-btn>
    </v-form>
</v-row>
</template>

<script>
export default {
    name: "TheSearch",
    data() {
        return {
            word: ""
        };
    },
}
</script>

<style>

</style>