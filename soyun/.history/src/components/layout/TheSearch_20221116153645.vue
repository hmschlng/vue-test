<template>
<v-row>
    <v-form>
        <v-form-input type="text" v-model="word"/>

        <v-btn>검색</v-btn>
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