<template>
  <div>
    <v-container>
      <div class="grid-wrapper">
        <div class="content">
          <pre>{{ note }}</pre>
        </div>
        <div class="sidebar">
          <div class="sidebar__item log">
            <div class="log-wrapper">
              <span>This is logs</span>
            </div>
          </div>
          <div class="sidebar__item">
            <span>Another block</span>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import api from "@/assets/js/api";

export default {
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
.grid-wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}

.content {
}

.sidebar {
  display: flex;
  flex-direction: column;
  &__item {
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
}
</style>
