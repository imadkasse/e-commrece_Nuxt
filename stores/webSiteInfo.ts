import { defineStore } from "pinia";

export const useWebsiteStore = defineStore("websiteStore", () => {
  const websiteStore = {
    name: "Ecommerce",
  };
  const editeWebName = (newName: string) => {
    websiteStore.name = newName;
  };
  return {
    websiteStore,
    editeWebName,
  };
});
