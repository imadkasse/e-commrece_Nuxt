<script lang="ts" setup>
import { useWebsiteStore } from "~/stores/webSiteInfo";

const router = useRouter();
// add :class and add color if to="" === currentPath
// const currentPath = router.currentRoute.value.fullPath.split("/")[1];

const { websiteStore } = useWebsiteStore();
const { user, clearUser } = useUserInfo();
const theme = useCookie("theme");

theme.value = theme.value ? theme.value : "light";

const setTheme = () => {
  theme.value = theme.value === "light" ? "dark" : "light";
  theme.value === "dark"
    ? document.body.classList.add("dark")
    : document.body.classList.remove("dark");
};
onMounted(() => {
  theme.value === "dark"
    ? document.body.classList.add("dark")
    : document.body.classList.remove("dark");
});
</script>

<template>
  <div class="border-b-2">
    <div
      class="p-4 "
    >
      <div class="flex items-center justify-around w-full ">
        <h1 class="font-bold text-2xl ">Exclusive</h1>

        <ul
          class="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
        >
          <li>
            <NuxtLink
              to="/"
              :class="' hover:border-b border-gray-500 transition duration-200'"
              aria-current="page"
              >Home</NuxtLink
            >
          </li>

          <li>
            <NuxtLink
              to="/products"
              class="hover:border-b border-gray-500 transition duration-200"
              >Products</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/profile"
              class="hover:border-b border-gray-500 transition duration-200"
              >Profile</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/about"
              class="hover:border-b border-gray-500 transition duration-200"
              >About</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/contact"
              class="hover:border-b border-gray-500 transition duration-200"
              >Contact</NuxtLink
            >
          </li>
        </ul>
        <div v-if="user">
          <h1 class="text-green-400">user exist</h1>
          <button class="text-red-400" @click="clearUser">log out</button>
        </div>
        <div v-else class="flex gap-1">
          <NuxtLink
            to="/login"
            class="text-white capitalize px-2 py-1 rounded-md bg-green-500 hover:bg-green-500/60 transition duration-200"
            >login</NuxtLink
          >
          <NuxtLink
            to="/signup"
            class="text-white capitalize px-2 py-1 rounded-md bg-purple-500 hover:bg-purple-500/60 transition duration-200"
            >Signup</NuxtLink
          >
        </div>
        <!-- dark and light mode switcher  -->
        <div v-if="theme === 'light'">
          <button class="text-black p-2" @click="setTheme()">
            <IconsDarkMode />
          </button>
        </div>
        <div v-else>
          <button class="text-black p-2" @click="setTheme()">
            <IconsLightMode />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
