<template>
<v-row>
    <form class="ma-10">
        <input type="text" v-model="word"/>
        <button @click="cl">검색</button>
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