import { defineStore } from "pinia";

export const useTheme = defineStore("themeStore", {
  state: () => ({
    theme: "light" as string, // تعريف user في state
  }),
  actions: {
    setTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
      
    },
  },
  persist: true,
});
