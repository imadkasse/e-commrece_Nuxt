import { defineNuxtPlugin } from "#app";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast, {
    position: "top-right", // مكان الإشعارات
    timeout: 3000, // مدة العرض بالمللي ثانية
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    showCloseButtonOnHover: false,
    transition: "Vue-Toastification__fade",
  });
});
