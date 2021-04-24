<template>
  <div v-if="note" class="note-page">
    <v-container>
      <div class="grid-wrapper">
        <div class="content">
          <div>
            <h1>{{ note.name }}</h1>
          </div>
        </div>
        <div class="sidebar">
          <the-logs class="sidebar__item" />
        </div>
      </div>
      <pre>{{ note }}</pre>
    </v-container>
  </div>
</template>

<script>
import TheLogs from "@/components/Logs/TheLogs";
import api from "@/assets/js/api";

export default {
  components: {
    TheLogs,
  },
  data() {
    return {
      note: null,
    };
  },
  mounted() {
    const id = this.$route.query.id;
    api.getNote(id).then((res) => (this.note = res.data));
  },
};
</script>

<style lang="scss">
.note-page {
  .grid-wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
  }
  .content {
    background: $c-gray-50;
    border: 1px solid $c-gray-100;
    border-radius: 4px;
    padding: 2rem;
  }
}
</style>
