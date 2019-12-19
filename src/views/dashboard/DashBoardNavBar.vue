<template>
  <div>
    <v-navigation-drawer color="blue-grey darken-3" dark v-model="drawer" app>
      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="title">HTactive</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-group
          v-for="item in items"
          :key="item.text"
          :prepend-icon="item.icon"
          :title="item.text"
        >
          <template v-slot:activator>
            <v-list-item-title>{{item.text}}</v-list-item-title>
          </template>

          <v-list-item
            v-for="chil in item.childs"
            :key="chil.text"
            :title="chil.text"
            link
            :to="chil.link"
          >
            <v-list-item-title v-text="chil.text"></v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar dense app color="white" flat>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer></v-spacer>
      <div>
        <v-avatar class="mx-3">
          <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="Duc Huy" />
        </v-avatar>
        <strong class="mx-2">Duc Huy</strong>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: ["items"],
  data: () => ({
    drawer: null
  })
};
</script>