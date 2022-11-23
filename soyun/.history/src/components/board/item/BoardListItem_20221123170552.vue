<template>
  <tr @click="moveDetail(articleno)">
    <td>{{ articleNo }}</td>
    <th>{{ title }}</th>
    <td>{{ nickname }}</td>
    <td>{{ hit }}</td>
    <td>{{ registerTime }}</td>
  </tr>
</template>

<script>
// import moment from "moment";

export default {
  name: "BoardListItem",
  props: {
    articleno: Number,
    subject: String,
    nickname: String,
    hit: Number,
    registerTime: String,
  },
  methods: {
    moveDetail(articleno) {
      this.$router.push({
        name: "boarddetail",
        params: { articleno: articleno },
      });
    },
  },
  // filters: {
  //   dataFormat(registerDate){
  //     return moment(new Date(registerDate)).format("YYYY.MM.DD");
  //   }
  // }
};
</script>

<style></style>
