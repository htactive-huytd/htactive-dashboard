<template>
  <v-card class="my-1" flat>
    <v-container>
      <v-row>
        <v-col cols="12" md="4" class="py-0">
          <v-text-field label="User Name" placeholder="Enter user name"></v-text-field>
        </v-col>
        <v-col cols="12" md="4" class="py-0">
          <v-text-field label="Full Name" placeholder="Enter Full Name"></v-text-field>
        </v-col>
        <v-col cols="12" md="4" class="py-0">
          <v-text-field label="Email" placeholder="Enter Email"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4" class="py-0">
          <v-text-field label="Phone Number" placeholder="Enter Phone Number"></v-text-field>
        </v-col>

        <v-col cols="12" md="4" class="py-0">
          <v-menu
            ref="menuDateStart"
            v-model="isDisplayMenuDateStart"
            :close-on-content-click="false"
            :return-value.sync="filter.dateStart"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="filter.dateStart"
                label="From"
                prepend-icon="mdi-calendar-range"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="filter.dateStart" no-title scrollable :max="maxStartDate">
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="isDisplayMenuDateStart = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.menuDateStart.save(filter.dateStart)">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="12" md="4" class="py-0">
          <v-menu
            ref="menuDateEnd"
            v-model="isDisplayMenuDateEnd"
            :close-on-content-click="false"
            :return-value.sync="filter.dateEnd"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="filter.dateEnd"
                label="To"
                prepend-icon="mdi-calendar-range"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="filter.dateEnd" no-title scrollable :min="minEndDate">
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="isDisplayMenuDateEnd = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.menuDateEnd.save(filter.dateEnd)">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row justify="center">
        <div>
          <v-btn depressed class="mx-3" color="primary">Search</v-btn>
          <v-btn depressed class="mx-3" color="blue-grey lighten-1">Cancel</v-btn>
        </div>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    isDisplayMenuDateStart: false,
    isDisplayMenuDateEnd: false,
    filter: {
      dateStart: new Date().toISOString().substr(0, 10),
      dateEnd: new Date().toISOString().substr(0, 10),
      full_name: "",
      phoneNumber: "",
      email: "",
      username: ""
    }
  }),
  methods: {},
  // watch: {
  //   dateStart: {
  //     handler() {
  //       console.log(this.dateStart);
  //     },
  //     deep: true
  //   }
  // },
  computed: {
    maxStartDate() {
      return new Date().toISOString().substr(0, 10);
    },
    minEndDate() {
      return this.filter.dateStart;
    }
  }
};
</script>

<style scope>
</style>