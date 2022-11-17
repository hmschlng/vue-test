<template>
  <v-btn-toggle
    group
    dense
  >
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn id="btn"
          v-bind="attrs"
          v-on="on"
        >
          시도
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="item in sido" :key="item">
          <v-btn depressed text>
            {{item}}
          </v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn id="btn"
          v-bind="attrs"
          v-on="on"
        >
          시/군/구
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="item in gugun" :key="item">
          <v-btn depressed text>
            {{item}}
          </v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn id="btn"
          v-bind="attrs"
          v-on="on"
        >
          동
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="item in dong" :key="item">
          <v-btn depressed text>
            {{item}}
          </v-btn>
        </v-list-item>
      </v-list>
    </v-menu>

  </v-btn-toggle>
</template>

<script>

export default {
  name: "LoactionSelect",
  data() {
    return {
      sido: [
        '서울특별시',
        '부산광역시',
        '대구광역시',
        '인천광역시',
        '광주광역시',
        '대전광역시',
        '울산광역시',
      ],
      gugun: [
        '종로구',
        '중구',
        '용산구',
        '성동구',
        '광진구',
        '동대문구',
        '중랑구',
      ],
      dong: [
        '청운동',
        '신교동',
        '궁정동',
        '효자동',
        '창성동',
        '통의동',
        '적선동',
      ],
    }
  },
  components: {
  }
}
</script>

<style scope>
  #btn {
    border: 1px solid gainsboro;
    border-radius: 5px;
  }
</style>