<template>
  <v-container>
    <v-card max-height="95vh">
      <v-row justify="space-between" align="start">
        <v-col cols="12" sm="6">
          <v-toolbar flat color="transparent" title="BlueZone" />
          <v-card>
            <v-card-text class="text-h5 font-weight-bold pb-0"
              >Welcome back</v-card-text
            >
            <v-card-text>Welcome back! Please enter your details</v-card-text>
            <v-card-text>
              <v-text-field
                label="Email"
                variant="outlined"
                prepend-inner-icon="mdi-at"
              />
              <v-text-field
                :append-inner-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="!show2 ? 'text' : 'password'"
                prepend-inner-icon="mdi-lock"
                name="input-10-2"
                label="Visible"
                hint="At least 8 characters"
                variant="outlined"
                class="input-group--focused"
                @click:append="show2 = !show2"
              ></v-text-field>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6"></v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    show1: false,
    show2: true,
    password: "Password",
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => `The email and password you entered don't match`,
    },
  }),
};
</script>
