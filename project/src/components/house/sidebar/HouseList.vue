<template>
  <div>
    <h2>HouseList</h2>
    <!-- <table>
        <thead>
            <th>1</th>
            <th>2</th>
            <th>3</th>
        </thead>
      </table> -->
    <house-list-item></house-list-item>        
    <v-list>
      <v-list-item-group v-model="model">
        <v-list-item>
        <v-card
          elevation="2"
        ></v-card>
        </v-list-item>
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