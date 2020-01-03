<template>
  <v-card class="my-1" flat>
    <v-container>
      <v-row>
        <v-col cols="12" md="4" class="py-0">
          <v-text-field label="User Name" placeholder="Enter user name" v-model="filter.username"></v-text-field>
        </v-col>
        <v-col cols="12" md="4" class="py-0">
          <v-text-field label="Full Name" placeholder="Enter Full Name" v-model="filter.full_name"></v-text-field>
        </v-col>
        <v-col cols="12" md="4" class="py-0">
          <v-text-field label="Email" placeholder="Enter Email" v-model="filter.email"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4" class="py-0">
          <v-text-field
            label="Phone Number"
            placeholder="Enter Phone Number"
            v-model="filter.phoneNumber"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4" class="py-0">
          <v-menu
            ref="menuDateStart"
            v-model="isDisplayMenuDateStart"
            :close-on-content-click="false"
            :return-value.sync="filter.startDate"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="filter.startDate"
                label="From"
                prepend-icon="mdi-calendar-range"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="filter.startDate" no-title scrollable :max="maxStartDate">
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="isDisplayMenuDateStart = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.menuDateStart.save(filter.startDate)">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="12" md="4" class="py-0">
          <v-menu
            ref="menuDateEnd"
            v-model="isDisplayMenuDateEnd"
            :close-on-content-click="false"
            :return-value.sync="filter.endDate"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="filter.endDate"
                label="To"
                prepend-icon="mdi-calendar-range"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="filter.endDate" no-title scrollable :min="minEndDate">
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="isDisplayMenuDateEnd = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.menuDateEnd.save(filter.endDate)">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row justify="center">
        <div>
          <v-btn depressed class="mx-3" color="primary" @click="search()">Search</v-btn>
          <v-btn depressed class="mx-3" color="blue-grey lighten-1" @click="cancel()">Cancel</v-btn>
        </div>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data: () => ({
    isDisplayMenuDateStart: false,
    isDisplayMenuDateEnd: false,
    filter: {
      startDate: "",
      endDate: "",
      full_name: "",
      phoneNumber: "",
      email: "",
      username: ""
    }
  }),
  mounted() {
    this.setFilterUser({
      startDate: "",
      endDate: "",
      full_name: "",
      phoneNumber: "",
      email: "",
      username: ""
    });
  },
  methods: {
    ...mapMutations("users", { setFilterUser: "setFilter" }),
    search() {
      this.setFilterUser(this.filter);
      this.$emit("search");
    },
    cancel() {
      this.filter = {
        startDate: "",
        endDate: "",
        full_name: "",
        phoneNumber: "",
        email: "",
        username: ""
      };
      this.setFilterUser(this.filter);
      this.$emit("cancel");
    }
  },
  computed: {
    maxStartDate() {
      return new Date().toISOString().substr(0, 10);
    },
    minEndDate() {
      return this.filter.startDate;
    }
  }
};
</script>

<style scope>
</style>