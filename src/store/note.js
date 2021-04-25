import api from "../assets/js/api/api";

const state = () => ({
  notes: [],
});

const getters = {
  getNotes(state) {
    return state.notes;
  },
};

const mutations = {
  SET_NOTES(state, notes) {
    state.notes = notes;
  },
  DELETE_NOTE_BY_INDEX(state, index) {
    state.notes.splice(index, 1);
  },
};

const actions = {
  async fetchNotes({ commit }) {
    const { data } = await api.getNotes();
    commit("SET_NOTES", data);
  },
  async fetchNote(ctx, id) {
    const { data } = await api.getNote(id);
    return data;
  },
  deleteNote({ commit }, data) {
    console.log(data);
    api.deleteNote(data.id).then(() => {
      commit("DELETE_NOTE_BY_INDEX", data.index);
    });
  },
  createNote(ctx, data) {
    return new Promise((resolve, reject) => {
      api
        .createNote(data)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  updateNote(ctx, [noteId, data]) {
    return new Promise((resolve, reject) => {
      api
        .updateNote(noteId, data)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
