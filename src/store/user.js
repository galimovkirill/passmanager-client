import api from "@/assets/js/api/api";
import cookies from "vue-cookies";
import router from "@/router";

const state = () => ({
  user: null,
  token: null,
  isLoggedIn: false,
  isAdmin: false,
});

const getters = {
  userAuthStatus: (state) => state.isLoggedIn,
  getUserByDecodedToken: (state) => {
    const base64Url = state.token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload).data;
  },
  getUserAdminStatus: (state) => state.user.roles.includes("ADMIN"),
};

const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
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
  REMOVE_USER(state) {
    state.user = null;
  },
  SET_IS_ADMIN_STATE(state, isAdmin) {
    state.isAdmin = isAdmin;
  },
  REMOVE_ADMIN_STATUS(state) {
    state.isAdmin = false;
  },
};

const actions = {
  async loginUser({ dispatch, commit, getters }, data) {
    try {
      const response = await api.loginUser(data);
      const token = response.data.token;
      dispatch("setUserState", token);
      dispatch("saveTokenInCookies", token);
      commit("SET_USER", getters["getUserByDecodedToken"]);
      commit("SET_IS_ADMIN_STATE", getters["getUserAdminStatus"]);

      router.push({ name: "Home" });
    } catch (e) {
      console.log("Auth error", e);
    }
  },
  logoutUser({ dispatch, commit }) {
    dispatch("removeTokenFromCookies");
    commit("REMOVE_TOKEN");
    commit("REMOVE_USER_AUTH_STATUS");
    commit("REMOVE_USER");
    commit("REMOVE_ADMIN_STATUS");
    router.push({ name: "Login" });
  },
  setUserState({ commit, getters }, token) {
    commit("SET_TOKEN", token);
    commit("SET_USER_AUTH_STATUS", true);
    commit("SET_USER", getters["getUserByDecodedToken"]);
    commit("SET_IS_ADMIN_STATE", getters["getUserAdminStatus"]);
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
