<template>
  <v-card
  class="mb-3"
  elevation="1"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          아파트
        </div>
        <v-list-item-title class="mb-1">
          풍림스페이스문3차아파트
        </v-list-item-title>
        <v-list-item-subtitle>대전광역시 유성구 온천3동</v-list-item-subtitle>
        <v-list-item-subtitle>4층</v-list-item-subtitle>
        <v-list-item-subtitle>34평</v-list-item-subtitle>
        <v-list-item-subtitle>3억 2천만원</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
      tile
      size="80"
      color="grey"
      >
        <img src="https://img.freepik.com/premium-photo/modern-beautiful-new-high-rise-residential-building-colored-wall-on-the-background-of-blue-sky-copy-space_158388-6884.jpg?w=2000">
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
      outlined
      rounded
      text
      >
      상세보기
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
// import HouseDetail from "@/components/house/sidebar/HouseDetail";
export default {
  name: "HouseListItem",
}
</script>

<style>

</style>