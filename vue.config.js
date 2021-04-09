module.exports = {
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/styles/_vars.scss";`,
      },
    },
  },
};
