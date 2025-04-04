<template>
  <div>
    <ul class="w-full text-center">
      <li
        class="text-gray-500/80 inline mx-4 text-xs"
        :class="{
          'text-primary inline mx-4': currentLocaleName === loc.name,
        }"
        v-for="loc in locales"
        :key="loc.code"
      >
        <a :href="switchLocalePath(loc.code)">
          {{ loc.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useI18n, useSwitchLocalePath } from "#i18n";

const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const currentLocaleName = computed(() => {
  return (
    locales.value.find((loc) => loc.code === locale.value)?.name || "Unknown"
  );

});





</script>
