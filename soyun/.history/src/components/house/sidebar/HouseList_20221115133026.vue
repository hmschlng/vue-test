<template>
  <div>
    <h2>HouseList</h2>
    <table>
        <thead>
            <th>1</th>
            <th>2</th>
            <th>3</th>
        </thead>
        <tbody>
            <house-list-item></house-list-item>
        </tbody>
    </table>
    <house-detail></house-detail>
  </div>
</template>

<script>
import HouseDetail from "@/components/house/sidebar/h";
export default {
  components: { HouseDetail },

}
</script>

<style>

</style>