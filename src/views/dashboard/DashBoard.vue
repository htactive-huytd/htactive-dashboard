<template>
  <v-app app>
    <DashBoardNavBar></DashBoardNavBar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import DashBoardNavBar from "./DashBoardNavBar";

export default {
  components: { DashBoardNavBar }
};
</script>

<style scoped>
.disabled {
  color: grey;
  pointer-events: none;
}
</style>