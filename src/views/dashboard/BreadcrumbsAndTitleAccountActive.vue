<template>
  <v-card class="mt-1" flat>
    <v-card-text class="pa-1">
      <v-breadcrumbs class="pa-1" :items="linkBreadCrumbs" divider="/"></v-breadcrumbs>
      <h3
        class="pa-1 font-weight-bold text--primary"
      >{{linkBreadCrumbs[linkBreadCrumbs.length -1].text}}</h3>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["linkBreadCrumbs"]
};
</script>