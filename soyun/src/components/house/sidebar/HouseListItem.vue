<template>
  <v-card class="mb-3" elevation="1">
    <v-list-item three-line>
      <v-list-item-content>
        <v-container>
          <v-row justify="space-between">
            <!-- <div class="grey--text fs-1">아파트</div> -->
            <v-icon>mdi-cards-heart</v-icon>
          </v-row>
        </v-container>
        <v-list-item-title class="mb-1">
        </v-list-item-title>
        <v-list-item-subtitle>{{apartmentName}}</v-list-item-subtitle>
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
  props: {
    aptCode: Number,
    buildYear: Number,
    roadName: String,
    roadNameBonbun: String,
    roadNameBubun: String,
    roadNameSeq: String,
    roadNameBasementCode: String,
    roadNameCode: String,
    dong: String,
    bonbun: String,
    bubun: String,
    sigunguCode: String,
    eubmyundongCode: String,
    dongCode: String,
    landCode: String,
    apartmentName: String,
    jibun: String,
    lng: String,
    lat: String,
    no: Number,
    dealAmount: String,
    dealYear: Number,
    dealMonth: Number,
    dealDay: Number,
    area: String,
    floor: String,
    cancelDealType: String,
  },
  data() {
    return {
      show: false,
      // temp data
      aptInfo: [
        {
          title: "가격",
          contents: this.dealAmount,
        },
        {
          title: "층수",
          contents: this.floor,
        },
        {
          title: "면적",
          contents: this.area,
        },
        {
          title: "준공연도",
          contents: this.buildYear,
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