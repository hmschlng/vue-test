<template>
  <v-main>
    <v-row>
      <v-spacer />
      <v-col :cols="mainWidth">
        <c-container id="aptImg">
          <v-img
            contain
            src="https://img.freepik.com/premium-photo/modern-beautiful-new-high-rise-residential-building-colored-wall-on-the-background-of-blue-sky-copy-space_158388-6884.jpg?w=2000"
          />
        </c-container>
        <h2>아파트 정보</h2>
        <v-simple-table>
          <tbody>
            <tr v-for="apt in aptInfo" :key="apt.title">
              <th>{{ apt.title }}</th>
              <td>{{ apt.contents }}</td>
            </tr>
          </tbody>
        </v-simple-table>
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
        {
          title: "세부사항",
          contents: "신촌역 도보 5분 거리",
        },
      ],
    };
  },
};
</script>

<style>
#aptImg {
  width: 100%;
  height: 300px;
  background-size: contain;
}
</style>
