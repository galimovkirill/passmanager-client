import api from "@/assets/js/api/api";
import cookies from "vue-cookies";
import router from "@/router";

const state = () => ({
  isLoggedIn: false,
  token: null,
});
const getters = {
  userAuthStatus: (state) => state.isLoggedIn,
};
const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },
  SET_USER_AUTH_STATUS(state, isLoggedIn) {
    state.isLoggedIn = isLoggedIn;
  },
  REMOVE_TOKEN(state) {
    state.token = null;
  },
  REMOVE_USER_AUTH_STATUS(state) {
    state.isLoggedIn = false;
  },
};
const actions = {
  async loginUser({ dispatch }, data) {
    try {
      const response = await api.loginUser(data);
      const token = response.data.token;
      dispatch("setUserState", token);
      dispatch("saveTokenInCookies", token);
      router.push({ name: "Home" });
    } catch (e) {
      console.log("Auth error", e);
    }
  },
  logoutUser({ dispatch, commit }) {
    dispatch("removeTokenFromCookies");
    commit("REMOVE_TOKEN");
    commit("REMOVE_USER_AUTH_STATUS");
    router.push({ name: "Login" });
  },
  setUserState({ commit }, token) {
    commit("SET_TOKEN", token);
    commit("SET_USER_AUTH_STATUS", true);
  },
  saveTokenInCookies(ctx, token) {
    cookies.set("token", token);
  },
  removeTokenFromCookies() {
    cookies.remove("token");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
