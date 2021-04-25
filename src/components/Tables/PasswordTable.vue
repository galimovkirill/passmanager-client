<template>
  <v-card>
    <v-data-table :headers="headers" :items="notes" :search="search">
      <template v-slot:item.index="{ index }">
        {{ index + 1 }}
      </template>

      <template v-slot:item.name="{ item }">
        <div @click="copyData(item.name)" class="cursor-pointer">
          {{ item.name }}
        </div>
      </template>

      <template v-slot:item.login="{ item }">
        <div @click="copyData(item.login)" class="cursor-pointer">
          {{ item.login }}
        </div>
      </template>

      <template v-slot:item.password="{ item }">
        <div @click="copyData(item.password)" class="cursor-pointer">
          {{ item.password }}
        </div>
      </template>

      <template v-slot:item.date="{ item }">
        {{ item.date | moment("DD.MM.YYYY, HH:mm:ss") }}
      </template>

      <template v-slot:item.url="{ item }">
        <div @click="openLink(item.url)" class="table-url">{{ item.url }}</div>
      </template>

      <template
        v-if="$store.getters['user/getUserAdminStatus']"
        v-slot:item.actions="{ item, index }"
      >
        <router-link :to="{ path: 'edit', query: { id: item._id } }">
          <v-icon small class="mr-2"> mdi-pencil </v-icon>
        </router-link>
        <v-icon small @click="deleteItem(item, index)"> mdi-delete </v-icon>
      </template>

      <template v-slot:item.more="{ item }">
        <router-link :to="{ path: 'note', query: { id: item._id } }">
          <v-btn depressed color="primary" x-small>Подбронее</v-btn>
        </router-link>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      search: "",
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
    };
  },
  methods: {
    deleteItem(item, index) {
      const sure = confirm("Вы уверены, что хотите удалить эту запись?");
      if (sure) {
        this.$store.dispatch("note/deleteNote", { id: item._id, index });
      }
    },
  },
  mounted() {
    this.$store.dispatch("note/fetchNotes");
  },
  computed: {
    notes() {
      return this.$store.getters["note/getNotes"];
    },
  },
};
</script>

<style lang="scss">
.table-url {
  cursor: pointer;
}
</style>
