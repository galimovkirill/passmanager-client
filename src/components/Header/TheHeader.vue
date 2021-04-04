<template>
  <v-app-bar app color="primary" dark>
    <router-link to="/" class="white--text text-decoration-none header-logo">
      Passmanager
    </router-link>

    <v-spacer></v-spacer>

    <v-btn class="ma-2" outlined color="white" to="/create">
      Добавить пароль
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style scoped></style>
