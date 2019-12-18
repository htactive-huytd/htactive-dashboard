<template>
  <v-container>
    <v-row v-if="error">
      <v-col cols="12" md="6" offset-md="3">
        <AlertCmp @dismissed="onDismissed" :text="error"></AlertCmp>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" offset-md="3">
        <v-card>
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Signup to HTactive</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <v-container>
              <v-form v-model="valid" @submit.prevent="onSignin">
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="User Name"
                      prepend-icon="mdi-account"
                      v-model="username"
                      :rules="rules.textRules"
                      required
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      id="mail"
                      label="E-mail"
                      name="email"
                      prepend-icon="mdi-email"
                      type="email"
                      v-model="email"
                      :rules="rules.emailRules"
                      required
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="Password"
                      name="password"
                      prepend-icon="mdi-lock"
                      type="password"
                      v-model="password"
                      :rules="rules.passwordRules"
                      required
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="Password Confirm"
                      name="password"
                      prepend-icon="mdi-lock"
                      type="password"
                      v-model="password"
                      :rules="rules.passwordRules"
                      required
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="Full Name"
                      prepend-icon="mdi-account-badge-horizontal"
                      v-model="full_name"
                      :rules="rules.textRules"
                      required
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-radio-group v-model="sex_type" row="row" mandatory>
                      <template v-slot:label>
                        <v-icon>mdi-human-male-female</v-icon>
                        <span class="px-1">Sex type:</span>
                      </template>
                      <v-radio label="Male" value="true"></v-radio>
                      <v-radio label="Female" value="false"></v-radio>
                    </v-radio-group>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="Address"
                      prepend-icon="mdi-map-marker"
                      v-model="address"
                      :rules="rules.textRules"
                      required
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="Phone Number"
                      type="number"
                      prepend-icon="mdi-cellphone-basic"
                      v-model="phoneNumber"
                      :rules="rules.textRules"
                      required
                    />
                  </v-col>
                </v-row>

                <v-row>
                  <v-col class="d-flex justify-end">
                    <v-btn
                      type="submit"
                      large
                      color="primary"
                      :disabled="!valid"
                      :loading="loading"
                    >
                      Sign up
                      <template v-slot:loader>
                        <span class="custom-loader">
                          <v-icon>mdi-cached</v-icon>
                        </span>
                      </template>
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row class="d-flex justify-space-around align-center">
                  <v-btn
                    color="primary"
                    class="text-capitalize"
                    text
                    to="/forgotpassword"
                  >Forgot Password?</v-btn>
                  <v-btn color="primary" class="text-capitalize" text to="/signin">Back to sign in?</v-btn>
                </v-row>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      valid: true,
      email: "",
      password: "",
      rules: {
        emailRules: [
          v => !!v || "E-mail is required",
          v => /.+@.+\..+/.test(v) || "E-mail must be valid"
        ],
        passwordRules: [
          v => !!v || "Password is required",
          v => (v && v.length >= 6) || "Password must be over 6 characters"
        ],
        textRules: [v => !!v || "This field is required"]
      }
    };
  },
  computed: {
    ...mapGetters("auth", ["loading", "error"])
  },
  watch: {},
  methods: {
    ...mapActions("auth", ["signin", "clearError"]), //modules vuex: auth,  actions: signin
    onSignin() {
      const payload = { email: this.email, password: this.password };
      this.signin(payload); //call actions signin at vuex-authentication
    },
    onDismissed() {
      this.clearError();
    }
  }
};
</script>