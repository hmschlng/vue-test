<template>
  <div>
    <router-link :to="{ name: '' }" >로고</router-link>
    <router-link to="" >지도</router-link>
    <router-link to="" >커뮤니티</router-link>
    <router-link to="" >부동산 뉴스</router-link>
    <router-link to="" >로그인 | 회원가입</router-link>
    <router-link to="" >프로필</router-link>
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