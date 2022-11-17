<template>
<v-row>
    <v-fo
    <input type="text" v-model="word"/>
    <v-btn>검색</v-btn>
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