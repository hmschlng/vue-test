<template>
  <div>
    <h2>TempProfile</h2>
    <router-link :to="{ name: 'mypage' }" >내정보</router-link>
    <router-link :to="{ name: 'map'}" >찜 목록</router-link>
    <router-link :to="{ name: 'community'}" >공지사항</router-link>
    <router-link :to="{ name: 'news'}" >고객센터</router-link>
    <router-link :to="{ name: 'login'}" >로그아웃</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>