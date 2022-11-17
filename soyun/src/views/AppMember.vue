<template>
  <v-main>
    <video muted autoplay loop>
      <source src="@/assets/main.mp4" type="video/mp4" />
    </video>
    <router-view></router-view>
  </v-main>
</template>

<script>
export default {
  name: "AppMember"
}
</script>

<style>

</style>