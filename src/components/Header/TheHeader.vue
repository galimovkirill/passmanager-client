<template>
  <v-app-bar app color="primary" dark>
    <router-link to="/" class="white--text text-decoration-none header-logo">
      Passmanager
    </router-link>

    <v-spacer></v-spacer>

    <v-btn class="ma-2" outlined color="white" to="/create">
      Добавить пароль
    </v-btn>
    <v-btn class="ma-2" outlined color="white" @click="logout">Выйти</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("user/logoutUser");
    },
  },
};
</script>

<style scoped></style>
