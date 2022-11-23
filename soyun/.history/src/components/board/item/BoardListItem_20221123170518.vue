<template>
  <tr @click="moveDetail(articleno)">
    <td>{{ articleNo }}</td>
    <th>{{ subject }}</th>
    <td>{{ author }}</td>
    <td>{{ hit }}</td>
    <td>{{ registerDate }}</td>
  </tr>
</template>

<script>
// import moment from "moment";

export default {
  name: "BoardListItem",
  props: {
    articleno: Number,
    subject: String,
    author: String,
    hit: Number,
    registerDate: String,
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
