<template>
  <v-col class="pa-0">
    <v-row justify="space-between">
      <v-row align="center" class="ma-1">
        <v-avatar size="32" class="ma-1">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
        <v-col>
          <div>작성자</div>
          <div class="grey--text">2022.11.22 11:38:05</div>
        </v-col>
      </v-row>
      <v-icon class="ma-4">mdi-delete</v-icon>
    </v-row>
    <div class="pa-2">
      코딩테스트만 준비하면 될 것 같은데 적성검사 까지 준비하려니 너무 힘에 부칩니다. 이에 대한 여러분의 대비책이
      있으신지 궁금합니다.
    </div>
    <v-divider class="my-2" />
  </v-col>
</template>

<script>
export default {
  name: "BoardCommentItem",
};
</script>

<style></style>
