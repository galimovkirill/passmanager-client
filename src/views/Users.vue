<template>
  <div class="users">
    <v-container fluid>
      <users-table />
    </v-container>
  </div>
</template>

<script>
import UsersTable from "../components/Tables/UsersTable";

export default {
  components: {
    UsersTable,
  },
};
</script>
