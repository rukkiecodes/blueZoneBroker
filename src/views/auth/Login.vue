<template>
  <v-container>
    <v-card height="95vh" class="mainCard pb-0 mb-0">
      <v-row justify="space-between" align="start">
        <v-col cols="12" sm="5">
          <v-toolbar flat color="transparent" title="BlueZone" />
          <v-card flat class="mt-12">
            <v-card-text class="text-h5 font-weight-bold pb-0"
              >Welcome back</v-card-text
            >
            <v-card-text>Welcome back! Please enter your details</v-card-text>
            <v-card-text class="pb-0">
              <v-text-field
                label="Email"
                variant="outlined"
                density="comfortable"
                prepend-inner-icon="mdi-at"
                :rules="[rules.emailMatch]"
              />
              <v-text-field
                hide-details
                type="password"
                label="password"
                name="input-10-2"
                variant="outlined"
                density="comfortable"
                hint="At least 8 characters"
                class="input-group--focused"
                prepend-inner-icon="mdi-lock"
                @click:append="show2 = !show2"
                :rules="[rules.required, rules.min]"
              ></v-text-field>
              <v-card-actions class="pt-0">
                <v-spacer />
                <router-link
                  to="/forgotpassword"
                  class="
                    text-indigo-accent-4 text-decoration-none
                    font-weight-medium
                  "
                  >Forgot password</router-link
                >
              </v-card-actions>
            </v-card-text>
            <v-card-text class="pt-0">
              <v-btn
                block
                flat
                size="large"
                color="indigo-accent-4"
                class="text-capitalize"
                >Sign In</v-btn
              >
              <v-btn
                block
                flat
                size="large"
                variant="tonal"
                color="grey-darken-4"
                class="mt-4 text-capitalize"
              >
                <v-avatar size="25" class="mr-4">
                  <img
                    style="width: 100%"
                    src="../../assets/images/google.png"
                  />
                </v-avatar>
                Sign In with google</v-btn
              >
            </v-card-text>
            <v-card-actions class="pt-0">
              <v-spacer />
              <span
                >Don't have an account?
                <router-link
                  to="/signup"
                  class="
                    text-indigo-accent-4 text-decoration-none
                    font-weight-medium
                  "
                  >Sign Up</router-link
                ></span
              >
              <v-spacer />
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="7" class="right ma-0 pa-0">
          <div class="ball" />
          <div class="glass" />
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
let passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export default {
  data: () => ({
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) =>
        v.match(passwordRegex) ||
        "Minimum eight characters, at least one letter, one number and one special character",
      emailMatch: (v) => v.match(emailRegex) || `Please enter a valid email`,
    },
  }),

  mounted() {
    this.$nextTick(() => {
      let mainCard = document.querySelector(".mainCard");
      let right = document.querySelector(".right");
      right.style.height = `${mainCard.offsetHeight + 20}px`;
    });
  },
};
</script>

<style scoped>
.right {
  position: relative;
  background: #f3f4f8;
}

.ball {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 250px;
  border-radius: 100%;
  background-color: #304ffe;
}

.glass {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 60vh;
  width: 100%;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
}
</style>