<template>
  <div style="position:absolute; top:64px; height:100%; width:100%;">
    <div id="map"></div>
    <div v-show="isAptExist"></div>
  </div>
</template>

<script>
// import { create } from "domain";

export default {
  name: "KakaoMap",
  data() {
    return {
      markers: [],
      infowindow: null,
    };
  },
  created() {
    console.log("KakaoMap.vue component created!!!");
    let here = [36.355305246699125, 127.29846209705138];
    this.markers.push(here);
    // console.log("=============", this.markers);
  },
  mounted() {
    console.log("KakaoMap.vue component mounted!!!")
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        `${process.env.VUE_APP_KAKAOMAP_API_SERVER_URL}?autoload=false&appkey=${process.env.VUE_APP_KAKAOMAP_API_KEY}`;
      document.head.appendChild(script);
    }
  },
  computed: {
    isAptExist() {
      if (this.$store.state.aptSearchStore.aptList) {
        this.setAptListAndMarkers();
        return true;
      }
      else return false;
    }
  },
  methods: {
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(36.355305246699125, 127.29846209705138),
        level: 2,
      };
      //지도 객체를 등록합니다.
      //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
      this.map = new kakao.maps.Map(container, options);
    },
    setAptListAndMarkers() {
      this.aptList = JSON.parse(JSON.stringify(this.$store.state.aptSearchStore.aptList));
      this.markers = [];
      for (const apt of this.aptList) {
        apt.dealAmount = (Math.floor(parseInt(apt.dealAmount.replace(",", "")) / 10000)).toString() + "억 "
        + (Math.floor(parseInt(apt.dealAmount.replace(",", "")) % 10000)).toString() + "만 원";
        let lnglat = [apt.lng, apt.lat];
        this.markers.push(lnglat);
      }
      console.log("=============", this.markers);
      this.displayMarker(this.markers);
    },
    displayMarker(markerPositions) {
      if (this.markers.length > 0) {
        this.markers.forEach((marker) => marker.setMap(null));
      }

      const positions = markerPositions.map(
        (position) => new kakao.maps.LatLng(...position)
      );

      if (positions.length > 0) {
        this.markers = positions.map(
          (position) =>
            new kakao.maps.Marker({
              map: this.map,
              position,
            })
        );

        const bounds = positions.reduce(
          (bounds, latlng) => bounds.extend(latlng),
          new kakao.maps.LatLngBounds()
        );

        this.map.setBounds(bounds);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {
  width: 100%;
  height: 100%;
}

.button-group {
  margin: 10px 0px;
}

button {
  margin: 0 3px;
}
</style>
