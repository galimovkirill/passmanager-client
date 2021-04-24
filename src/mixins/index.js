export default {
  methods: {
    copyData(data) {
      const textarea = document.createElement("textarea");
      textarea.innerHTML = data;
      document.body.appendChild(textarea);
      textarea.select();
      const result = document.execCommand("copy");
      document.body.removeChild(textarea);

      this.showToast("Данные скопированы в буфер обмена.");
      return result;
    },

    showToast(message, type = "success") {
      this.$toast.open({
        message,
        type,
        duration: 3000,
        dismissible: true,
        position: "bottom-right",
      });
    },
  },
};
