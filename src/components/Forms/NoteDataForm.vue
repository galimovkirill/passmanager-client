<template>
  <div>
    <v-container>
      <v-form>
        <v-text-field
          v-model="noteData.name"
          :counter="50"
          label="Название"
          required
        ></v-text-field>
        <v-text-field
          v-model="noteData.login"
          label="Логин"
          required
        ></v-text-field>
        <v-text-field
          v-model="noteData.password"
          label="Пароль"
          required
        ></v-text-field>
        <v-text-field v-model="noteData.url" label="URL адрес"></v-text-field>
        <v-textarea
          name="input-7-1"
          v-model="noteData.description"
          label="Описание"
        ></v-textarea>
        <v-btn
          v-if="formType === 'create'"
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
        <v-btn
          v-if="formType === 'edit'"
          class="ma-2"
          :loading="loading"
          :disabled="loading"
          color="success"
          @click="updateNote"
          >Изменить
          <template v-slot:loader>
            <span>Загрузка...</span>
          </template></v-btn
        >
      </v-form>
    </v-container>
  </div>
</template>

<script>
import api from "@/assets/js/api";
export default {
  data() {
    return {
      noteData: {
        name: this.note.name,
        login: this.note.login,
        password: this.note.password,
        url: this.note.url,
        description: this.note.description,
      },

      loading: false,
      loader: null,
    };
  },
  props: {
    formType: {
      type: String,
      required: true,
      validator: (value) => {
        return ["create", "edit"].indexOf(value) !== -1;
      },
    },
    note: {
      type: Object,
      default: function () {
        return {
          name: "",
          login: "",
          password: "",
          url: "",
          description: "",
        };
      },
    },
  },
  methods: {
    createNote() {
      this.loading = true;
      api
        .createNote(this.noteData)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
        .finally(() => {
          this.loading = false;
        });
    },
    updateNote() {
      this.loading = true;
      api
        .updateNote(this.$route.query.id, this.noteData)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
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
