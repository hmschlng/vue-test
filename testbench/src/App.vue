<template>
  <v-app>
    <v-app-bar clipped-left>
      app-bar1
    </v-app-bar>
    <v-app-bar clipped-left>
      app-bar2
    </v-app-bar>
    <v-main>
      <v-navigation-drawer
    clipped 
    permanent
    width="300px"></v-navigation-drawer>
      <v-toolbar>
        toolbar
      </v-toolbar>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      links: [
        'Dashboard',
        'Messages',
        'Profile',
        'Updates',
      ],
    }),
  }
</script>