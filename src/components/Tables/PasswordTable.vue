<template>
  <v-card>
    <!--    <v-card-title>-->
    <!--      <v-text-field-->
    <!--        v-model="search"-->
    <!--        append-icon="mdi-magnify"-->
    <!--        label="Поиск"-->
    <!--        single-line-->
    <!--        hide-details-->
    <!--      ></v-text-field>-->
    <!--    </v-card-title>-->
    <v-data-table
      :headers="headers"
      :items="data"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>
import api from "@/assets/js/api";

export default {
  data() {
    return {
      search: "",
      headers: [
        { text: "Название", value: "name" },
        { text: "Логин", value: "login" },
        { text: "Пароль", value: "password" },
        { text: "URL", value: "url" },
        { text: "Описание", value: "description" },
        { text: "Дата добавления", value: "date" },
      ],
      data: [],
    };
  },
  mounted() {
    api.getNotes().then((res) => {
      this.data = res.data;
    });
  },
};
</script>

<style lang="scss"></style>
