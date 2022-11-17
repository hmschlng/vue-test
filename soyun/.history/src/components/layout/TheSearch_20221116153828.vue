<template>
<v-row>
    <form>
        <input type="text" v-model="word"/>
        <button>검색</button>
    </form>
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