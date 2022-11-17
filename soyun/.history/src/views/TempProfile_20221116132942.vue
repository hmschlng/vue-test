<template>
  <v-main>
    <h2>TempProfile</h2>
    <router-link :to="{ name: 'mypage' }" > 내정보</router-link>
    <router-link :to="{ name: 'wishlist'}" > 찜 목록</router-link>
    <router-link :to="{ name: 'notice'}" > 공지사항</router-link>
    <router-link :to="{ name: 'helpcenter'}" > 고객센터</router-link>
    <div>로그아웃</div>
    <router-view></router-view>
  </v-main>
</template>

<script>
export default {

}
</script>

<style>

</style>