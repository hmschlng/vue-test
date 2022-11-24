<template>
  <v-form id="boardInput">
    <v-text-field
      v-model="article.title"
      placeholder="제목을 입력하세요."
      outlined
      class="mx-4"
    ></v-text-field>
    <v-col>
      <ckeditor
        v-model="article.content"
        :editor="editor"
        :config="editorConfig"
      />
    </v-col>
    <v-row justify="end" class="my-10">
      <v-btn
        v-if="this.type === 'register'"
        @click="clickBtn"
        color="primary"
        class="ma-2"
        large
        >등록</v-btn
      >
      <v-btn
        v-else
        @click="clickBtn"
        class="ma-2"
        color="primary"
        large
        >수정</v-btn
      >
      <v-btn :to="{ name: 'community' }" class="ma-2" color="primary" large
        >목록</v-btn
      >
    </v-row>
  </v-form>
</template>

<script>
import { writeArticle, modifyArticle, getArticle } from "@/api/board";
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
      article: {
        articleNo: 0,
       title: "",
        content: "",
      },
      editor: ClassicEditor,
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
      this.articleNo = this.$route.params.articleNo;
      getArticle(
        this.articleNo,
        ({ data }) => {
          // this.article.articleno = data.article.articleno;
          // this.article.userid = data.article.userid;
          // this.article.subject = data.article.subject;
          // this.article.content = data.article.content;
          this.article = data;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  },
  methods: {
    clickBtn() {
      let err = true;
      let msg = "";
      !this.article.title &&
        ((msg = "제목 입력해주세요"), (err = false), this.$refs.title.focus());
      err &&
        !this.article.content &&
        ((msg = "내용 입력해주세요"),
        (err = false),
        this.$refs.content.focus());

      if (!err) alert(msg);
      else
        this.type === "register" ? this.registArticle() : this.modifyArticle();
    },
    registArticle() {
      let param = {
        category: this.$store.state.boardStore.categoryTab == 0 ? "share" : "local",
        memberId: "kimssafy@ssafy.com",
        nickname: "soyoon",
        title: this.article.title,
        content: this.article.content,
      };
      writeArticle(
        param,
        ({ data }) => {
          let msg = "등록 처리시 문제가 발생했습니다.";
          if (data === true) {
            msg = "등록이 완료되었습니다.";
          }
          alert(msg);
          this.moveList();
        },
        (error) => {
          console.log(error);
        }
      );
    },
    modifyArticle() {
      let param = {
        articleNo: this.article.articleNo,
        category: this.$store.state.boardStore.categoryTab == 0 ? "share" : "local",
        title: this.article.title,
        content: this.article.content,
      };
      modifyArticle(
        param,
        ({ data }) => {
          let msg = "수정 처리시 문제가 발생했습니다.";
          if (data === true) {
            msg = "수정이 완료되었습니다.";
          }
          alert(msg);
          // 현재 route를 /list로 변경.
          this.moveList();
        },
        (error) => {
          console.log(error);
        }
      );
    },
    moveList() {
      this.$router.push({ name: "community" });
    },
  },
};
</script>

<style>
.ck-content {
  min-height: 180px;
}
</style>