<template>
  <div class="pa-6 pt-16">
    <h2>Wishlist</h2>
        <v-list>
      <v-list-item-group v-model="model">
        <house-list-item></house-list-item>
        <house-list-item></house-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import HouseListItem from "@/components/house/sidebar/HouseListItem";

export default {
 name: "MyWishlist",
  data() {
    return {
      model: null,
    };
  },
  components: {
    HouseListItem,
    // HouseDetail
  },
}
</script>

<style>

</style>