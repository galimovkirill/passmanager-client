<template>
  <div>
    <v-container>
      <v-form>
        <v-text-field
          v-model="name"
          :counter="50"
          label="Название"
          required
        ></v-text-field>
        <v-text-field v-model="login" label="Логин" required></v-text-field>
        <v-text-field v-model="password" label="Пароль" required></v-text-field>
        <v-text-field v-model="url" label="URL адрес"></v-text-field>
        <v-text-field v-model="description" label="Описание"></v-text-field>
        <v-btn
          class="ma-2"
          :loading="loading"
          :disabled="loading"
          color="success"
          @click="createNote"
        >
          Добавить
          <template v-slot:loader>
            <span>Загрузка...</span>
          </template>
        </v-btn>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import api from "@/assets/js/api";
export default {
  data() {
    return {
      name: "",
      login: "",
      password: "",
      url: "",
      description: "",

      loading: false,
      loader: null,
    };
  },
  methods: {
    createNote() {
      this.loading = true;
      const data = {
        name: this.name,
        login: this.login,
        password: this.password,
        url: this.url,
        description: this.description,
      };
      console.log(data);
      api
        .createNote(data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 768px;
}
</style>
