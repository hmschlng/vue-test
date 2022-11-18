<template>
  <div>
    <v-list>
      <v-list-item-group v-model="model">
        <house-list-item></house-list-item>        
        <house-list-item></house-list-item>        
      </v-list-item-group>
    </v-list>
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