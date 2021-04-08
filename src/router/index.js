import Vue from "vue";
import VueRouter from "vue-router";

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
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
