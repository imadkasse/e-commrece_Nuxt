<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import axios from "axios";
import { useToast } from "vue-toastification";

const toast = useToast();

const { t, locale } = useI18n();
const email = ref("");
const password = ref("");
const runtimeConfig = useRuntimeConfig();

const { setUser } = useUserInfo();
const router = useRouter();

const handelLogin = async () => {
  try {
    const res = await axios.post(
      `${runtimeConfig.public.API_URL}/api/v1/auth/login`,
      {
        email: email.value,
        password: password.value,
      }
    );
    setUser(res.data.data.user);

    await router.push("/profile");

  } catch (error) {
    //@ts-expect-error:fix agin
    const errorMessage = error?.response?.data?.message || "حدث خطأ غير متوقع!";
    toast.error(errorMessage);
  }
};
</script>
<template>
  <div class="grid grid-cols-7 h-screen" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
    <section class="lg:col-span-3 col-span-7 bg-white">
      <div class="py-12 px-12">
        <h1
          class="text-slate-800 text-3xl font-extrabold ltr:first-letter:uppercase"
        >
          {{ t("sign_in_banner") }}
        </h1>
        <form @submit.prevent="handelLogin">
          <div class="mt-12">
            <label
              for="email"
              class="block text-sm/6 font-semibold text-gray-900 capitalize"
              >{{ t("email") }}</label
            >
            <div class="mt-2.5">
              <input
                type="email"
                name="email"
                v-model="email"
                id="email"
                autocomplete="off"
                class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 border-2 border-gray-200 focus:border-transparent outline-custom-1"
              />
            </div>
          </div>
          <div class="mt-12">
            <label
              for="password"
              class="block text-sm/6 font-semibold text-gray-900 capitalize"
              >{{ t("password") }}</label
            >
            <div class="mt-2.5">
              <input
                type="password"
                name="password"
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
                  href="/"
                  class="text-sm font-medium text-green-600 ltr:first-letter:uppercase"
                  >{{ t("forgot_password") }}</NuxtLink
                >
              </div>
            </div>
          </div>
          <div class="mt-12">
            <div class="">
              <NuxtLink
                to="/signup"
                class="text-gray-400 hover:text-gray-600 transition duration-200"
              >
                {{ t("create_account") }}
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
    <div class="col-span-4 sm:hidden lg:block">
      <img
        :src="`https://static.vecteezy.com/system/resources/thumbnails/005/879/539/small_2x/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg`"
        :alt="`Ecommerce`"
        class="object-cover h-full z-0"
      />
    </div>
  </div>
</template>
