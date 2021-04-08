<template>
  <div>
    <note-data-form v-if="note" form-type="edit" :note="note" />
  </div>
</template>

<script>
import api from "@/assets/js/api";
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
  mounted() {
    const noteId = this.$route.query.id;
    if (!noteId) {
      this.$router.push("/");
      return 0;
    }

    api.getNote(noteId).then((res) => {
      console.log(res);
      this.note = res.data;
    });
  },
};
</script>
