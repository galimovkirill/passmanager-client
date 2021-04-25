<template>
  <v-card>
    <v-data-table :headers="headers" :items="data"></v-data-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "№", value: "index" },
        { text: "Название", value: "name" },
        { text: "Логин", value: "login" },
        { text: "Пароль", value: "password" },
        { text: "URL", value: "url" },
        { text: "Дата добавления", value: "date" },
        { text: "", value: "actions", sortable: false },
        { text: "", value: "more", sortable: false },
      ],
      data: [],
    };
  },
  mounted() {},
};
</script>

<style lang="scss"></style>
