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
    <div class="p-4">
      <div class="flex items-center justify-around w-full">
        <h1 class="font-bold text-2xl">Exclusive</h1>

        <ul
          class="md:flex hidden flex-col p-4 md:p-0 mt-4 border  border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
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
          <div v-if="user">
            <!-- if user is logged in  -->
            <h1 class="text-green-400">user exist</h1>
            <button class="text-red-400" @click="clearUser">log out</button>
          </div>
          <div v-else class="flex gap-3">
            <!-- if user is not logged in  -->
            <NuxtLink
              to="/login"
              h
              class="capitalize text-black hover:border-b border-gray-500 transition duration-200"
              >login</NuxtLink
            >
            <NuxtLink
              to="/signup"
              class="capitalize text-black hover:border-b border-gray-500 transition duration-200"
              >Signup</NuxtLink
            >
          </div>
        </ul>
        <div class="flex gap-1">
          <div class="relative">
            <input
              type="search"
              id="default-search"
              class="block w-full p-2 ps-10 text-sm bg-inputColor rounded-md outline-none"
              placeholder=""
            />
            <div
              class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
            >
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
          </div>
          <button class="">
            <IconsHeart width="24" height="24" />
          </button>
          <button class="">
            <IconsShopCart width="24" height="24" />
          </button>
        </div>

        <!-- dark and light mode switcher  -->
        <div v-if="theme === 'light'">
          <button class="text-black p-2" @click="setTheme()">
            <IconsDarkMode width="24" height="24" />
          </button>
        </div>
        <div v-else>
          <button class="text-black p-2" @click="setTheme()">
            <IconsLightMode width="24" height="24" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
