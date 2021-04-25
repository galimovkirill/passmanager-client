<template>
  <div>
    <note-data-form v-if="note" form-type="edit" :note="note" />
  </div>
</template>

<script>
import NoteDataForm from "@/components/Forms/NoteDataForm";

export default {
  components: {
    NoteDataForm,
  },
  data() {
    return {
      note: null,
    };
  },
  async mounted() {
    this.note = await this.$store.dispatch(
      "note/fetchNote",
      this.$route.query.id
    );
  },
};
</script>
