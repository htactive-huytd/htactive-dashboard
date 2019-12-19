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
            <v-toolbar-title>Reset Password</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <v-container>
              <v-form v-model="valid" @submit.prevent="onResetPassword">
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
                      label="Verification Code"
                      prepend-icon="mdi-shield-check"
                      v-model="verificationCode"
                      :rules="rules.textRules"
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
                      v-model="newPassword"
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
                      v-model="verifyPassword"
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
                      Reset Password
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
      email: "",
      verificationCode: "",
      newPassword: "",
      verifyPassword: "",
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
    ...mapGetters("auth", ["loading", "error"]),
    passwordConfirmationRule() {
      return [this.newPassword === this.verifyPassword || "Password must match"];
    }
  },
  methods: {
    ...mapActions("auth", ["resetPassword", "clearError"]),
    onResetPassword() {
      const payload = {
        email: this.email,
        verificationCode: this.verificationCode,
        newPassword: this.newPassword,
        verifyPassword: this.verifyPassword
      };
      this.resetPassword(payload);
    },
    onDismissed() {
      this.clearError();
    }
  }
};
</script>
