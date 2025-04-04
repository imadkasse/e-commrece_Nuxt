import { defineStore } from "pinia";

export const useUserInfo = defineStore("userStore", {
  state: () => ({
    user: null as any, // تعريف user في state
  }),
  actions: {
    setUser(data: any) {
      this.user = data;
    },
    clearUser() {
      this.user = null;
    },
  },
  persist: true,
});
