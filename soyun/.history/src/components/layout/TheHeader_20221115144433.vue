<template>
  <div>
    <router-link :to="{ name: 'main' }" >로고</router-link>
    <router-link :to="{ name: 'map'}" >지도</router-link>
    <router-link :to="{ name: 'community'}" >커뮤니티</router-link>
    <router-link :to="{ name: 'news'}" >부동산 뉴스</router-link>
    <router-link :to="{ name: 'login'}" >로그인 | 회원가입</router-link>
    <router-link :to="{ name: 'member'}" >프로필</router-link>
    <my-menu @click="show"></my-menu>
  </div>
</template>

<script>
export default {
    name: "TheHeader",
    data() {
        return {};
    }
}
</script>

<style>

</style>