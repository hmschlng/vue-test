<template>
  <div id="houseList" style="height:100%">
      <v-row justify="center" align="center" style="height:100%" v-show="noitem">
          <v-col>
            <v-img
            src="@/assets/empty_list.png"
            aspect-ratio="1"
            ></v-img>
            <h2 class="grey--text text-center">
              찾는 매물이 없어요
              <v-icon class="grey--text" large>mdi-emoticon-cry-outline</v-icon>
            </h2>
          </v-col>
      </v-row>
      <v-list v-show="isAptExists">
        <v-list-item-group>
          <house-list-item v-for="(apt, index) in aptList" :key="index" v-bind="apt"></house-list-item>
      </v-list-item-group>
    </v-list>
    <!-- <house-detail></house-detail> -->
  </div>
</template>

<script>
// import HouseDetail from "@/components/house/sidebar/HouseDetail";
import HouseListItem from "@/components/house/sidebar/HouseListItem";
export default {
  name: "HouseList",
  components: {HouseListItem},
  data() {
    return {
      aptList: this.$store.state.aptSearchStore.aptList,
      currentLocation: null,
      noitem: true,
    };
  },
  computed: {
    isAptExists() {
      if (this.$store.state.aptSearchStore.aptList.length != 0) {
        console.log("isAptExist called");
        console.log("this.$store.state.aptSearchStore.aptList.length: ", this.$store.state.aptSearchStore.aptList.length);
        this.setAptList();
        return true;
      }
      else return false;
    },
  },
  methods: {
    setAptList() {
      console.log("setAptList called");
      this.noitem = false;
      this.aptList = JSON.parse(JSON.stringify(this.$store.state.aptSearchStore.aptList));
      for (const apt of this.aptList) {
        apt.dealAmount = (Math.floor(parseInt(apt.dealAmount.replace(",", "")) / 10000)).toString() + "억 "
          + (Math.floor(parseInt(apt.dealAmount.replace(",", "")) % 10000)).toString() + "만 원";
      }
      console.log("data -> aptList.length : ", this.aptList.length);
      this.currentLocation = this.$store.state.aptSearchStore.currentLocation;
    },
  }
};
</script>

<style scoped>
#houseList {
  position: relative;
  top: 54px;
  padding: 10px;
  z-index: -1;
}
</style>


<!-- 
<v-card class="mb-3" elevation="1" v-for="(apt, index) in aptList" :key="index">
            <v-list-item three-line>
              <v-list-item-content>
              <v-list-item-title class="mb-1">
                {{ apt.apartmentName }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ currentLocation.loc }} {{ apt.jibun }} 번지</v-list-item-subtitle>
              <v-list-item-subtitle>{{ apt.area }} m<sup>3</sup></v-list-item-subtitle>
              <v-list-item-subtitle>{{ apt.dealAmount }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar
            tile
            size="80"
            color="grey"
            >
            <img src="https://img.freepik.com/premium-photo/modern-beautiful-new-high-rise-residential-building-colored-wall-on-the-background-of-blue-sky-copy-space_158388-6884.jpg?w=2000">
          </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn outlined rounded text>상세보기</v-btn>
          </v-card-actions>
        </v-card>

-->