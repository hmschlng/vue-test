<template>
  <v-form id="boardInput">
    <v-text-field
      v-model="subject"
      placeholder="제목을 입력하세요."
      outlined
    ></v-text-field>
    <v-col>
    <ckeditor
      :editor="editor"
      v-model="editorData"
      :config="editorConfig"
    />
    </v-col>
    <v-row v-if="this.type !== 'qna'" justify="end" class="my-10">
      <v-btn
        v-if="this.type === 'register'"
        :to="{ name: 'community' }"
        color="primary"
        class="ma-2"
        large
        >등록</v-btn
      >
      <v-btn v-else :to="{ name: 'community' }" class="ma-2" color="primary" large>수정</v-btn>
      <v-btn :to="{ name: 'community' }" class="ma-2" color="primary" large>목록</v-btn>
    </v-row>
  </v-form>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-vue2";
import "@ckeditor/ckeditor5-build-classic/build/translations/ko";

export default {
  name: "BoardInputItem",
  components: {
    ckeditor: CKEditor.component,
  },
  data() {
    return {
      subject: "",
      contents: "",
      editor: ClassicEditor,
      editorData: "",
      editorConfig: {
        // The configuration of the editor.
        language: "ko",
      },
    };
  },
  props: {
    type: { type: String },
  },
  created() {
    if (this.type === "update") {
      this.subject = this.$route.params.articleno;
      this.contents = this.$route.params.articleno;
    }
  },
};
</script>

<style>
.ck-content {
  min-height: 180px;
}
</style>