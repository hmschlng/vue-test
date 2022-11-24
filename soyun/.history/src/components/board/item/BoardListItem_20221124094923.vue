<template>
  <tr @click="moveDetail(articleNo)">
    <td>{{ articleNo }}</td>
    <th>{{ title }}</th>
    <td>{{ nickname }}</td>
    <td>{{ hit }}</td>
    <td>{{ registerTime | dataFormat }}</td>
  </tr>
</template>

<script>
import moment from "moment";

export default {
  name: "BoardListItem",
  props: {
    articleNo: Number,
    title: String,
    nickname: String,
    hit: Number,
    registerTime: String,
  },
  methods: {
    moveDetail(articleNo) {
      noticdetail
      this.$router.push({
        name: "boarddetail",
        params: { articleNo: articleNo },
      });
    },
  },
  filters: {
    dataFormat(registerTime){
      return moment(new Date(registerTime)).format("YYYY.MM.DD");
    }
  }
};
</script>

<style></style>
