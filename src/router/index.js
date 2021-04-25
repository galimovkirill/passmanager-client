import Vue from "vue";
import VueRouter from "vue-router";
import cookies from "vue-cookies";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home"),
  },
  {
    path: "/create",
    name: "Create",
    component: () => import("../views/Create"),
  },
  {
    path: "/edit",
    name: "Edit",
    component: () => import("../views/Edit"),
  },
  {
    path: "/note",
    name: "Note",
    component: () => import("../views/Note"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login"),
    beforeEnter: (to, from, next) => {
      if (cookies.get("token")) {
        next({ name: "Home" });
      }
      next();
    },
  },
  {
    path: "/users",
    name: "Users",
    component: () => import("../views/Users.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== "Login" && !cookies.get("token")) next({ name: "Login" });
  else next();
});

export default router;
