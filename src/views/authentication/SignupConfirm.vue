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
            <v-toolbar-title>Signup Confirm</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <v-container>
              <v-form v-model="valid" @submit.prevent="onSignupConfirm">
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
                      prepend-icon="mdi-lock"
                      v-model="verificationCode"
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
                      Verification
                      <template v-slot:loader>
                        <span class="custom-loader">
                          <v-icon color="white">mdi-cached</v-icon>
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
                  <v-btn color="primary" class="text-capitalize" text to="/signup">Create Account?</v-btn>
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
      rules: {
        emailRules: [
          v => !!v || "E-mail is required",
          v => /.+@.+\..+/.test(v) || "E-mail must be valid"
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
    ...mapActions("auth", ["signinConfirm", "clearError"]),
    onSignupConfirm() {
      const payload = {
        email: this.email,
        verificationCode: this.verificationCode
      };
      this.signinConfirm(payload);
    },
    onDismissed() {
      this.clearError();
    }
  }
};
</script>