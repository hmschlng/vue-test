<template>
  <div>
    <h2>HouseList</h2>
    <table>
        <thead>
            <th>1</th>
            <th>2</th>
            <th>3</th>
        </thead>
        <house-list-item></house-list-item>        
    </table>
    <house-detail></house-detail>
  </div>
</template>

<script>
import HouseListItem from "@/components/house/sidebar/HouseListItem";
export default {
    name: "HouseList",
    components: { 
        HouseListItem 
    },
};
</script>

<style>

</style>