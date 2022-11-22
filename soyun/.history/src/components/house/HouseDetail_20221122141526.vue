<template>
  <v-main>
    <v-row>
      <v-spacer />
      <v-col :cols="mainWidth">
        <div id="aptImg">
          <img
            style="height: 500px"
            src="https://img.freepik.com/premium-photo/modern-beautiful-new-high-rise-residential-building-colored-wall-on-the-background-of-blue-sky-copy-space_158388-6884.jpg?w=2000"
          />
        </div>
        <h2>아파트 정보</h2>
        <v-simple-table>
            <tr>
                <th></th>
                <td></td>
            </tr>

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
            title: "방종류",
            contents: "아파트"
        },
        {
            title: "가격",
            contents: "1000/150"
        },
        {
            title: "면적",
            contents: "30.79"
        },
        {
            title: "가격",
            contents: "1000/150"
        },
        {
            title: "가격",
            contents: "1000/150"
        },
        {
            title: "가격",
            contents: "1000/150"
        },
      ]
    };
  },
};
</script>

<style>
#aptImg {
  height: 400px;
  background-size: contain;
}
</style>
