<template>
  <v-form>
    <div class="login-form">
      <h1>Войти в аккаунт</h1>
      <div class="login-form-group">
        <v-text-field v-model="username" label="Логин"></v-text-field>
        <v-text-field v-model="password" label="Пароль"></v-text-field>
        <v-btn depressed color="primary" @click="loginUser">Войти</v-btn>
      </div>
    </div>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    username: "",
    password: "",
  }),
  methods: {
    loginUser() {
      const { username, password } = this;
      const data = { username, password };
      this.$store.dispatch("user/loginUser", data);
    },
  },
};
</script>

<style lang="scss">
.login-form {
  max-width: 400px;
  margin: 0 auto;
  position: absolute;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  &-group {
    margin-top: 1rem;
  }
}
</style>
