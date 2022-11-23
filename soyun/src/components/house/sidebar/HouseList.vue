<template>
  <div id="houseList">
    <v-list>
      <v-list-item-group v-show="isAptExist">
        <v-card class="mb-3" elevation="1" v-for="(apt, index) in aptList" :key="index">
          <v-list-item three-line>
            <v-list-item-content>
              <!-- <div class="text-overline mb-4">
                아파트
              </div> -->
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
      </v-list-item-group>
    </v-list>
    <!-- <house-detail></house-detail> -->
  </div>
</template>

<script>
// import HouseDetail from "@/components/house/sidebar/HouseDetail";
export default {
  name: "HouseList",
  data() {
    return {
      aptList: [],
      currentLocation: null,
    };
  },
  computed: {
    isAptExist() {
      if (this.$store.state.aptSearchStore.aptList) {
        console.log("isAptExist called")
        this.setAptList();
        return true;
      }
      else return false;
    }
  },
  methods: {
    setAptList() {
      this.aptList = JSON.parse(JSON.stringify(this.$store.state.aptSearchStore.aptList));
      for (const apt of this.aptList) {
        apt.dealAmount = (Math.floor(parseInt(apt.dealAmount.replace(",", "")) / 10000)).toString() + "억 "
          + (Math.floor(parseInt(apt.dealAmount.replace(",", "")) % 10000)).toString() + "만 원";
      }
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
