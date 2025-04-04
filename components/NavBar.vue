<script lang="ts" setup>
import { useWebsiteStore } from "~/stores/webSiteInfo";

const router = useRouter();
// add :class and add color if to="" === currentPath
const currentPath = router.currentRoute.value.fullPath.split("/")[1];

const { websiteStore } = useWebsiteStore();
const { user ,clearUser} = useUserInfo();
</script>

<template>
  <div class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-8"
          alt="Flowbite Logo"
        />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >{{ websiteStore.name }}</span
        >
      </NuxtLink>
      <!-- menu btn -->
      <button
        data-collapse-toggle="navbar-dropdown"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-dropdown"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        class="hidden w-full md:flex md:items-center md:gap-5 md:w-auto"
        id="navbar-dropdown"
      >
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <NuxtLink
              to="/"
              :class="'block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent'"
              aria-current="page"
              >Home</NuxtLink
            >
          </li>

          <li>
            <NuxtLink
              to="/products"
              class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Products</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/profile"
              class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Profile</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/about"
              class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >About</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/contact"
              class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
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
      </div>
    </div>
  </div>
</template>
