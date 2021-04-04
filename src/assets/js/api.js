import { http } from "@/assets/js/http";

export default {
  getNotes() {
    return http.get("/notes");
  },
  createNote(data) {
    return http.post("/notes", data);
  },
};
