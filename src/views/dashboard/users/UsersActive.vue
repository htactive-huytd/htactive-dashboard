<template>
  <div>
    <UsersSearch></UsersSearch>
    <div>
      <v-col>
        <v-btn class="primary" to="#">
          <v-icon left>mdi-account-plus-outline</v-icon>Add New Employee
        </v-btn>
      </v-col>
      <div>
        <v-data-table
          :headers="headers"
          :items="usersActive"
          :options.sync="options"
          :server-items-length="totalUsersActive"
          :loading="loading"
          class="elevation-1"
          :footer-props="{
            showFirstLastPage: true,
            firstIcon: 'mdi-arrow-collapse-left',
            lastIcon: 'mdi-arrow-collapse-right',
            prevIcon: 'mdi-minus',
            nextIcon: 'mdi-plus'
          }"
        >
          <template v-slot:body="{ items }">
            <tbody>
              <tr v-for="item in items" :key="item.username">
                <td>{{ item.username }}</td>
                <td>{{ item.full_name }}</td>
                <td>{{ item.sex_type ? 'Male':'Female' }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.phoneNumber }}</td>
                <td>{{ item.role }}</td>
                <td>{{ item.blocked ? 'Block' : 'Active' }}</td>
                <td class="d-flex justify-center align-center">
                  <v-btn text to="#">
                    <v-icon>mdi-lock-outline</v-icon>
                  </v-btn>
                  <v-btn text to="#">
                    <v-icon>mdi-trash-can-outline</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-data-table>
      </div>
    </div>
  </div>
</template>
  
<script>
import UsersSearch from "./UsersSearch";
import data from "../../../data/DataMenuDashBoard.json";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: { UsersSearch },
  data() {
    return {
      headers: data.headersUserTable
    };
  },
  computed: {
    ...mapGetters("users", {
      loadingTable: "loading",
      optionsTable: "options",
      totalUsersActiveTable: "totalUsersActive",
      usersActiveTable: "usersActive"
    }),

    loading: {
      get() {
        return this.loadingTable;
      },
      set(value) {
        this.setLoadingTable(value);
      }
    },
    options: {
      get() {
        return this.optionsTable;
      },
      set(value) {
        this.setOptionsTable(value);
      }
    },
    totalUsersActive: {
      get() {
        return this.totalUsersActiveTable;
      },
      set(value) {
        this.setTotalUsersActiveTable(value);
      }
    },
    usersActive: {
      get() {
        return this.usersActiveTable;
      },
      set(value) {
        this.setUsersActiveTable(value);
      }
    }
  },
  methods: {
    ...mapMutations("users", {
      setLoadingTable: "setLoading",
      setOptionsTable: "setOptions",
      setTotalUsersActiveTable: "setTotalUsersActive",
      setUsersActiveTable: "setUsersActive"
    })
  }
};
</script>