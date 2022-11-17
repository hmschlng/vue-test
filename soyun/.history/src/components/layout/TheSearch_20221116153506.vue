<template>
<v-row>
    <input type="text" v-model=""/>
    <v-btn>검색</v-btn>
</v-row>
</template>

<script>
export default {
    name: "TheSearch",
    data() {
        return {
            word: null
        };
    },
}
</script>

<style>

</style>