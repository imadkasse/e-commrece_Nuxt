<template>
  <div class="grid grid-cols-7 h-screen" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
    <section class="lg:col-span-3 col-span-7 bg-white">
      <div class="py-2 px-2">
        <h1
          class="text-slate-800 text-3xl font-extrabold ltr:first-letter:uppercase"
        >
          {{ t("sign_up_banner") }}
        </h1>
        <form @submit.prevent="submit">
          <div class="mt-12">
            <label
              for="first_name"
              class="block text-sm/6 font-semibold text-gray-900 capitalize"
              >{{ t("first_name") }}</label
            >
            <div class="mt-2.5">
              <input
                type="text"
                name="username"
                v-model="username"
                id="username"
                autocomplete="off"
                class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 border-2 border-gray-200 focus:border-transparent outline-custom-1"
              />
            </div>
          </div>
          <div class="mt-12">
            <label
              for="last_name"
              class="block text-sm/6 font-semibold text-gray-900 capitalize"
              >{{ t("last_name") }}</label
            >
            <div class="mt-2.5">
              <input
                type="text"
                name="last_name"
                v-model="password"
                id="password"
                class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 border-2 border-gray-200 focus:border-transparent outline-custom-1"
              />
            </div>
          </div>
          <div class="mt-12">
            <div class="grid grid-cols-2">
              <div>
                <input type="checkbox" name="remember-me" id="remember-me" />
                <label
                  for="remember-me"
                  class="text-sm text-gray-500 mx-2 ltr:first-letter:uppercase"
                  >{{ t("remember_me") }}</label
                >
              </div>
              <div class="ltr:text-right rtl:text-left">
                <NuxtLink
                  to="/login"
                  class="text-sm font-medium text-green-600 ltr:first-letter:uppercase"
                  >{{ t("already_have_an_account") }}</NuxtLink
                >
              </div>
            </div>
          </div>
          <div class="mt-12">
            <div class="">
              <NuxtLink
                to="/login"
                class="text-gray-400 hover:text-gray-600 transition duration-200"
              >
                {{ t("already_have_an_account") }}
              </NuxtLink>
            </div>
          </div>
          <div class="mt-12">
            <button
              class="w-full bg-primary py-3 font-medium text-lg text-white rounded-md hover:bg-secondary ltr:first-letter:uppercase"
            >
              {{ t("sign_in") }}
            </button>
          </div>
        </form>
      </div>
      <LangSwitcher />
    </section>
    <div class="lg:col-span-4 xs:hidden">
      <img
        :src="`https://static.vecteezy.com/system/resources/thumbnails/005/879/539/small_2x/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg`"
        :alt="`Ecommerce`"
        class="object-cover h-full z-0"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref } from "vue";

const { t, locale } = useI18n();
const username = ref("");
const password = ref("");
const router = useRouter();

const submit = () => {
  console.log("username:", username.value);
  console.log("password:", password.value);
  router.push('/profile')
};
</script>
