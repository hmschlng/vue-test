<template>
  <v-card class="mb-3" elevation="1">
    <v-list-item three-line>
      <v-list-item-content>
        <v-container>
        <v-row justify="space-between">
          <div class="grey--text fs-1">아파트</div>
          <v-icon>mdi-cards-heart</v-icon>
        </v-row>
        </v-container>
        <v-list-item-title class="mb-1">
          풍림스페이스문3차아파트
        </v-list-item-title>
        <v-list-item-subtitle>대전광역시 유성구 온천3동</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey">
        <img
          src="https://img.freepik.com/premium-photo/modern-beautiful-new-high-rise-residential-building-colored-wall-on-the-background-of-blue-sky-copy-space_158388-6884.jpg?w=2000"
        />
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions @click="show = !show">
      <v-btn color="primary" text> 상세보기 </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-simple-table>
          <tbody>
            <tr v-for="apt in aptInfo" :key="apt.title">
              <th>{{ apt.title }}</th>
              <td>{{ apt.contents }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
// import HouseDetail from "@/components/house/sidebar/HouseDetail";
export default {
  name: "HouseListItem",
  data() {
    return {
      show: false,
      // temp data
      aptInfo: [
        {
          title: "가격",
          contents: "1000/150",
        },
        {
          title: "층수",
          contents: "4층",
        },
        {
          title: "면적",
          contents: "30평",
        },
        {
          title: "건축설립일",
          contents: "2018.10.09",
        },
      ],
    };
  },
};
</script>

<style scoped>
#houseListItem {
  z-index: 0;
}
</style>