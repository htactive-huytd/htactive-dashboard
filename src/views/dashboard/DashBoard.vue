<template>
  <v-app app>
    <DashBoardNavBar :items="items"></DashBoardNavBar>
    <v-content>
      <Breadcrumbs v-if="linkBreadCrumbs.length !== 0 " :linkBreadCrumbs="linkBreadCrumbs"></Breadcrumbs>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import DashBoardNavBar from "./DashBoardNavBar";
import Breadcrumbs from "./BreadcrumbsAndTitleAccountActive";
import data from "../../data/DataMenuDashBoard.json";

export default {
  components: { DashBoardNavBar, Breadcrumbs },
  data: () => ({ linkBreadCrumbs: [], items: data.dataMenuDashBoard }),
  mounted() {
    if (this.$route.path) {
      this.redirectrouter(this.$route.path);
    }
  },
  methods: {
    redirectrouter(path) {
      let a = path;
      if (a.split("/").length > 2) {
        let menuDashBoard = data.dataMenuDashBoard.find(menu => {
          if (menu.childs.find(child => child.link === a)) {
            return menu;
          }
        });
        let c = menuDashBoard.childs.find(b => {
          if (b.link === a) {
            return b;
          }
        });
        this.linkBreadCrumbs = [
          {
            text: "Trang chủ",
            href: "/dashboard"
          },
          {
            text: menuDashBoard.text,
            href: "#"
          },
          {
            text: c.text,
            href: c.link
          }
        ];
      } else {
        this.linkBreadCrumbs = [
          {
            text: "Trang chủ",
            href: "/dashboard"
          }
        ];
      }
    }
  },
  watch: {
    $route(val) {
      this.redirectrouter(val.path);
    }
  }
};
</script>

<style scoped>
</style>