<template>
  <v-footer dark padless>
    <v-card flat tile class="grey lighten-3 grey--text text-center" width="100%">
      <v-row>
        <v-spacer />
        <v-col :cols="mainWidth">
          <v-row align="center" class="mt-6">
            <v-icon x-large color="grey">mdi-home-heart</v-icon>
            <v-toolbar-title default>WHERE IS MY HOME</v-toolbar-title>
          </v-row>
          <!-- <v-card-text>
            <v-btn v-for="icon in icons" :key="icon" class="mx-4 grey--text" icon>
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text> -->
          <v-simple-table>
            <tr>
              <th></th>
              <td></td>
            </tr>
          </v-simple-table>
        
          <v-divider></v-divider>

          <v-card-text class="grey--text"> {{ new Date().getFullYear() }} — <strong>Vuetify</strong> </v-card-text>
        </v-col>
        <v-spacer />
      </v-row>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "TheFooter",
  data() {
    return {
      mainWidth: this.$store.state.mainStore.mainWidth,
      // icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
      info: [
        {
          title: "",
          contents: ""
        },
        {
          title: "",
          contents: ""
        },
        {
          title: "",
          contents: ""
        },
        {
          title: "",
          contents: ""
        },
      ],
    };
  },
};
</script>

<style></style>
