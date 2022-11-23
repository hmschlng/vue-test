<template>
  <div class="mt-6">
    <v-row justify="end" class="my-4">
      <!-- 문의하기 모달창 -->
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" large color="primary"> 문의하기 </v-btn>
        </template>
        <v-card>
          <v-card-title class="justify-center text-h4 ma-8">
            문의하기
          </v-card-title>
            <small>최대한 빠르고 친절하게 답변드리겠습니다.</small>
          <v-card-text>
            <board-input-item type="qna"></board-input-item>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              등록
            </v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false">
              취소
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <board-list></board-list>
    <div class="text-center my-8">
      <v-pagination v-model="page" :length="6"></v-pagination>
    </div>
  </div>
</template>

<script>
import BoardList from "@/components/board/BoardList";
import BoardInputItem from "@/components/board/item/BoardInputItem";

export default {
  name: "TheQna",
  components: { BoardList, BoardInputItem },
  data() {
    return {
      page: 1,
      dialog: false,
    };
  },
};
</script>

<style>
</style>