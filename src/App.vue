<template>
  <v-app>
    <the-header />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import TheHeader from "@/components/Header/TheHeader";

export default {
  name: "App",
  components: {
    TheHeader,
  },
};
</script>
