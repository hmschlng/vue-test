<template>
  <div class="mt-6">
    <v-row justify="end" class="my-4">
      <!-- 문의하기 모달창 -->
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" large color="primary"> 문의하기 </v-btn>
        </template>
        <v-card>
          <v-card-title class="justify-center text-h4 ma-0 pa-4"> 문의하기 </v-card-title>
          <v-form class="ma-8">
            <label>제목</label>
            <v-text-field v-model="subject" placeholder="제목을 입력하세요." outlined></v-text-field>
            <label>내용</label>
            <v-textarea v-model="subject" placeholder="제목을 입력하세요." outlined></v-textarea>
          <small>최대한 빠르고 친절하게 답변드리겠습니다.</small>
            <v-btn color="primary" @click="dialog = false"> 등록 </v-btn>
            <v-btn color="primary" @click="dialog = false"> 취소 </v-btn>
          </v-form>
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

export default {
  name: "TheQna",
  components: { BoardList },
  data() {
    return {
      page: 1,
      dialog: false,
    };
  },
};
</script>

<style></style>
