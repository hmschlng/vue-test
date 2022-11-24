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
      map: [],
      markers: [],
      pos:[],
      here: [],
      aptList: [],
      infowindow: null,
    };
  },
  created() {
    // 유성캠 = [36.355305246699125, 127.29846209705138];
    if (!("geolocation" in navigator)) {
      return;
    }

    navigator.geolocation.getCurrentPosition(pos => {
      this.here = [36.35535021464917, 127.29849847726501];
      console.log(pos);
      if (window.kakao && window.kakao.maps) {
        this.initMap();
      } else {
        const script = document.createElement("script");
        /* global kakao */
        script.onload = () => kakao.maps.load(this.initMap);
        script.src =
          `//${process.env.VUE_APP_KAKAOMAP_API_SERVER_URL}?autoload=false&appkey=${process.env.VUE_APP_KAKAOMAP_API_KEY}`;
        document.head.appendChild(script);
      }}, err => {
        alert(err.message)
    });
    // this.markers.push(here);
    // console.log("=============", this.markers);
  },
  computed: {
    isAptExist() {
      if (this.$store.state.aptSearchStore.aptList.length > 0) {
        this.getAptList();
        return true;
      }
      else return false;
    }
  },
  methods: {
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(this.here[0], this.here[1]),
        level: 3,
      };
      //지도 객체를 등록합니다.
      //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
      this.map = new kakao.maps.Map(container, options);
      this.displayMarker([this.here]);
    },
    getAptList() {
      this.aptList = JSON.parse(JSON.stringify(this.$store.state.aptSearchStore.aptList));
      console.log("~~~~~getAptList.aptList: ", this.aptList);

      this.pos = [];
      for (let i = 0; i < this.aptList.length; i++) {
        console.log("~~~~~aptList: ", this.aptList[i]);
        this.pos.push([this.aptList[i].lat, this.aptList[i].lng]);
      }
      this.displayMarker(this.pos);
    },

    displayMarker(markerPositions) {
      // 마커 표시 지우는 코드
      if (this.markers.length > 0) {
        this.markers.forEach((marker) => marker.setMap(null));
      }

      // 마커의 죄표값을 LatLng객체로 만들어 positions 배열에 담기
      const positions = markerPositions.map(
        (position) => new kakao.maps.LatLng(...position)
      );
      console.log("~~~~~positions: ", positions);
      // 마커 표시 및 지도 이동하기
      if (positions.length > 0) { // 표시할 좌표 정보가 있으면
        this.markers = positions.map( // 마커 생성
          (position) =>
            new kakao.maps.Marker({
              map: this.map,
              position,
              clickable: true,
            })
        );

        for (const marker of this.markers) {
          var iwContent = '<div style="width:50px;height:30px;padding:5px;">Hello World!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
              iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
  
          // 인포윈도우를 생성합니다
          var infowindow = new kakao.maps.InfoWindow({
              content : iwContent,
              removable : iwRemoveable
          });
  
          // 마커에 클릭이벤트를 등록합니다
          kakao.maps.event.addListener(marker, 'click', function() {
                // 마커 위에 인포윈도우를 표시합니다
                infowindow.open(this.map, marker);  
          });
        }
        const bounds = positions.reduce(
          (bounds, latlng) => bounds.extend(latlng),
          new kakao.maps.LatLngBounds()
        );
        
        this.map.setBounds(bounds);

        
      }
    },
    // setAptListAndMarkers() {
    //   // aptList 초기화
    //   this.aptList = JSON.parse(JSON.stringify(this.$store.state.aptSearchStore.aptList));
    //   // markers 초기화
    //   if (this.markers.length > 0) {
    //     this.markers.forEach((marker) => marker.setMap(null));
    //   }
    //   for (const apt of this.aptList) {
    //     apt.dealAmount = (Math.floor(parseInt(apt.dealAmount.replace(",", "")) / 10000)).toString() + "억 "
    //     + (Math.floor(parseInt(apt.dealAmount.replace(",", "")) % 10000)).toString() + "만 원";
    //     let markerPos = [apt.lng, apt.lat];
    //     this.markers.push(markerPos);
    //   }
    //   console.log("=============", this.markers);
    //   this.displayMarker(this.markers);
    // },
  },
  // },
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
