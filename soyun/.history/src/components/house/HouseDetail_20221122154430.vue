<template>
  <v-main class="pa-0">
    <v-row>
      <v-spacer />
      <v-col :cols="mainWidth">
        <v-img
          class="my-8"
          eager
          max-height="400px"
          width="100%"
          src="https://img.freepik.com/premium-photo/modern-beautiful-new-high-rise-residential-building-colored-wall-on-the-background-of-blue-sky-copy-space_158388-6884.jpg?w=2000"
        />
        <v-row class="ma-2" justify="space-between">
          <h2>아파트 정보</h2>
          <v-icon large>mdi-cards-heart</v-icon>
        </v-row>
        <v-divider class="black" />
        <v-simple-table>
          <tbody>
            <tr v-for="apt in aptInfo" :key="apt.title">
              <th>{{ apt.title }}</th>
              <td>{{ apt.contents }}</td>
            </tr>
          </tbody>
        </v-simple-table>
        <v-divider class="mb-10" />
        <h2 class="ma-2">세부사항</h2>
        <div class="grey lighten-4 pa-3 mb-10">
          ★ 특징 ★ <br>
          ✔ 2호선 신촌역 도보 3분거리 초역세권! <br>
          ✔ 홍대입구역 도보 9분, 서강대역 도보 8분 거리로 편리합니다 <br>
          ✔ 방과 거실이 넓게 잘빠진 1.5룸입니다. <br>
          ✔ 이중창호 시스템으로 단열과 방음이 뛰어납니다. <br>
          ✔ 다용도실(세탁실)이 따로
          있어 좋습니다. ✔ 공동현관 보안 등으로 안전합니다. ✔ 카페, 편의점, 은행, 대학병원, 주민센터, 우체국 등 대학교
          캠퍼스와 인접하여 생활 인프라가 좋습니다.
        </div>
      </v-col>
      <v-spacer />
    </v-row>
    <the-footer></the-footer>
  </v-main>
</template>

<script>
import TheFooter from "../layout/TheFooter.vue";
export default {
  name: "HouseDetail",
  components: { TheFooter },
  data() {
    return {
      mainWidth: this.$store.state.mainStore.mainWidth,
      // temp data
      aptInfo: [
        {
          title: "아파트명",
          contents: "싸피 아파트",
        },
        {
          title: "방종류",
          contents: "아파트",
        },
        {
          title: "가격",
          contents: "1000/150",
        },
        {
          title: "면적",
          contents: "30.79m2",
        },
        {
          title: "사용승인일",
          contents: "1000/150",
        },
      ],
    };
  },
};
</script>

<style></style>
