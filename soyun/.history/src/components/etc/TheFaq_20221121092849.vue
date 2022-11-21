<template>
  <div class="mt-6">
    <v-expansion-panels v-model="panel" multiple accordion focusable>
      <v-expansion-panel v-for="(faq, i) in faqs" :key="i">
        <v-expansion-panel-header>Q.  {{faq.q}}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <br>
          A. {{faq.a}}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  name: "TheFaq",
  data() {
    return {
      panel: [],
      items: 5,
      // temp data
      faqs: [
        {
          q: "소방은 어떤 서비스인가요?",
          a: "오픈형 부동산 플랫폼 '소방'은 살고 싶은 집을 쉽게 찾아볼 수 있습니다."
        },
        {
          q: "소방에 등록된 방을 믿을 수 있나요?",
          a: "소방은 사용자 분들에게 믿을 수 있는 정보를 제공하는 것을 최우선으로 합니다."
        },
        {
          q: "커뮤니티에 등록한 글을 수정/삭제 하고 싶어요.",
          a: "[우측 상단 프로필 > 내글 목록] 에 들어가시면 수정/삭제 가능합니다."
        },
        {
          q: "",
          a: ""
        },
        {
          q: "허위매물은 어떻게 관리 하나요?",
          a: "허위매물 신고 접수와 소방의 허위매물 전담팀이 수시로 매물을 살펴보고 필터링하고 있습니다."
        },
      ]
    };
  },
  methods: {
 
  },
};
</script>

<style></style>
