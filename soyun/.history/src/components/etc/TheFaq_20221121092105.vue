<template>
  <div class="mt-6">
    <v-expansion-panels v-model="panel" multiple accordion focusable>
      <v-expansion-panel v-for="(item, i) in items" :key="i">
        <v-expansion-panel-header>Header {{ item }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  name: "TheFaq",
  data() {
    return {
      panel: [],
      items: 5,
      // temp data
      faq: [
        {
          
        },
      ]
    };
  },
  methods: {
 
  },
};
</script>

<style></style>
