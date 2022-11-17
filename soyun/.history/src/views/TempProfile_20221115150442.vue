<template>
  <div>
    <h2>TempProfile</h2>
    <router-link :to="{ name: 'main' }" >내정보</router-link>
    <router-link :to="{ name: 'map'}" >지도</router-link>
    <router-link :to="{ name: 'community'}" >커뮤니티</router-link>
    <router-link :to="{ name: 'news'}" >부동산 뉴스</router-link>
    <router-link :to="{ name: 'login'}" >로그인 | 회원가입</router-link>
    <router-link :to="{ name: 'member'}" >프로필</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>