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
            <v-toolbar-title>Update Password</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <v-container>
              <v-form v-model="valid" @submit.prevent="onUpdatePassword">
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
                      v-model="rePassword"
                      :rules="passwordConfirmationRule"
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
                      Update Password
                      <template v-slot:loader>
                        <span class="custom-loader">
                          <v-icon>mdi-cached</v-icon>
                        </span>
                      </template>
                    </v-btn>
                  </v-col>
                </v-row>
                <!-- <v-row class="d-flex justify-space-around align-center">
                  <v-btn
                    color="primary"
                    class="text-capitalize"
                    text
                    to="/forgotpassword"
                  >Forgot Password?</v-btn>
                  <v-btn color="primary" class="text-capitalize" text to="/signin">Back to sign in?</v-btn>
                </v-row>-->
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
      password: "",
      rePassword: "",
      rules: {
        passwordRules: [
          v => !!v || "Password is required",
          v => (v && v.length >= 6) || "Password must be over 6 characters"
        ]
      }
    };
  },
  computed: {
    ...mapGetters("auth", ["loading", "error"]),
    passwordConfirmationRule() {
      return [this.rePassword === this.password || "Password must match"];
    }
  },
  methods: {
    ...mapActions("auth", ["updatePassword", "clearError"]),
    onUpdatePassword() {
      const payload = {
        password: this.password
      };
      this.updatePassword(payload);
    },
    onDismissed() {
      this.clearError();
    }
  }
};
</script>
