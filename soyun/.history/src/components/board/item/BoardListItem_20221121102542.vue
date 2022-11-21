<template>
  <tr @click="moveDetail">
    <td>{{ articleno }}</td>
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
    moveDetail(row) {
      console.log("row");
      console.log(row);
      this.$router.push({
        name: "boarddetail",
        params: { articleno: 0 },
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
