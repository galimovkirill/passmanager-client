<template>
  <div class="home">
    <v-container fluid>
      <password-table />
    </v-container>
  </div>
</template>

<script>
import PasswordTable from "@/components/Tables/PasswordTable";

export default {
  name: "Home",
  components: {
    PasswordTable,
  },
};
</script>
