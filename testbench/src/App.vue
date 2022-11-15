<template>
  <v-app>
    <v-app-bar
      app
      clipped-left
    >
      <v-container class="py-0 fill-height">

        <v-icon x-large> mdi-home-heart </v-icon>

        <v-btn
          v-for="link in links"
          :key="link"
          text
        >
          {{ link }}
        </v-btn>

        <v-spacer></v-spacer>
        
        <v-responsive max-width="260">
          <v-text-field
          dense
          flat
          hide-details
          rounded
          solo-inverted
          ></v-text-field>
        </v-responsive>
        <v-spacer></v-spacer>
        <v-avatar
          class="mr-10"
          color="grey darken-1"
          size="32"
        ></v-avatar>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer permanent app clipped fixed>
      nav-drawer
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        contents
      </v-container>
      <v-footer app>
        footer
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
// import { mdiHomeHeart } from '@mdi/js';
export default {
  name: 'App',

  data: () => ({
      links: [
        'Dashboard',
        'Messages',
        'Profile',
        'Updates',
      ],
    }),
};
</script>
