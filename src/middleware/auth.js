export default function auth({ next, store }) {
  if (store.getters["user/userAuthStatus"]) {
    console.log(store.getters["user/userAuthStatus"]);
    return next({
      name: "Home",
    });
  }

  return next();
}
