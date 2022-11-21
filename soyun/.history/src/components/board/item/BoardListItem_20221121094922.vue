<template>
  <router-link :to="{ name: 'boarddetail', params: { articleno: articleno } }">
    <tr>
      <td>{{ articleno }}</td>
      <th>{{ subject }}</th>
      <td>{{ author }}</td>
      <td>{{ hit }}</td>
      <td>{{ registerDate }}</td>
    </tr>
  </router-link>
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
  // filters: {
  //   dataFormat(registerDate){
  //     return moment(new Date(registerDate)).format("YYYY.MM.DD");
  //   }
  // }
};
</script>

<style></style>
