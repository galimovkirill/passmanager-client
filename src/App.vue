<template>
  <div>
    <default-layout v-if="isAuthorized" />
    <unauthorized-layout v-else />
  </div>
</template>

<script>
import DefaultLayout from "@/layouts/default";
import UnauthorizedLayout from "@/layouts/unauthorized";

export default {
  name: "App",
  components: {
    DefaultLayout,
    UnauthorizedLayout,
  },
  computed: {
    isAuthorized() {
      return this.$store.getters["user/userAuthStatus"];
    },
  },
  mounted() {
    const token = this.$cookies.get("token");
    if (token) {
      this.$store.dispatch("user/setUserState", token);
    }
  },
};
</script>

<style lang="scss">
@import "~@/assets/styles/main.scss";
</style>
