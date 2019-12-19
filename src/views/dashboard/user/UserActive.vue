<template>
  <div>
    <UserSearch></UserSearch>
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
import UserSearch from "./UserSearch";
import data from "../../../data/DataMenuDashBoard.json";
export default {
  components: { UserSearch },
  data() {
    return {
      totalUsersActive: 0,
      usersActive: [],
      loading: false,
      options: {},
      headers: data.headersUserTable
    };
  }
};
</script>