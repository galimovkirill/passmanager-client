import { http } from "@/assets/js/http";

export default {
  getNotes() {
    return http.get("/notes");
  },
  getNote(id) {
    return http.get(`/notes/${id}`);
  },
  createNote(data) {
    return http.post("/notes", data);
  },
  deleteNote(id) {
    return http.delete(`/notes/${id}`);
  },
  updateNote(id, data) {
    return http.put(`/notes/${id}`, data);
  },
};
