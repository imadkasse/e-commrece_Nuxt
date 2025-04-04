export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserInfo();

  if (!userStore.user) {
    return navigateTo("/login");
  }
});
