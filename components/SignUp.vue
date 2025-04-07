<template>
  <div class="grid grid-cols-7 my-24">
    <div class="lg:col-span-4 border xs:hidden">
      <NuxtImg
        src="/imgs/signup&login/img.png"
        :alt="`Ecommerce`"
        class="object-cover w-full h-full z-0"
      />
    </div>
    <section
      class="lg:col-span-3 col-span-7 bg-white"
      :dir="locale === 'ar' ? 'rtl' : 'ltr'"
    >
      <div class="py-2 px-2">
        <h1
          class="text-slate-800 text-3xl font-extrabold ltr:first-letter:uppercase"
        >
          {{ t("sign_up_banner") }}
        </h1>
        <form @submit.prevent="submit">
          <div class="mt-5">
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
          <div class="mt-5">
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
          <div class="mt-5">
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
                  class="text-sm font-medium text-secondary ltr:first-letter:uppercase"
                  >{{ t("already_have_an_account") }}</NuxtLink
                >
              </div>
            </div>
          </div>
          <div class="mt-12">
            <button
              class="w-full bg-secondary transition duration-200 py-3 font-medium text-lg text-white rounded-md hover:bg-hoverBtn ltr:first-letter:uppercase"
            >
              {{ t("sign_in") }}
            </button>
          </div>
        </form>
      </div>
      <LangSwitcher />
    </section>
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
  router.push("/profile");
};
</script>
