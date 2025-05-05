<script lang="ts" setup>
import { Instagram, Linkedin, Twitter } from "lucide-vue-next";
const props = defineProps<{
  url: string;
  name: string;
  job: string;
}>();
</script>

<template>
  <div class="flex flex-col gap-4">
    <!-- image -->
    <div
      class="bg-secondary2 px-8 py-5 flex justify-center w-[370px] h-[430px]"
    >
      <NuxtImg :src="url" class="w-full" />
    </div>
    <div class="flex flex-col gap-1">
      <!-- name -->
      <div>
        <h1 class="font-[400] text-3xl">{{ name }}</h1>
      </div>
      <!-- Job -->
      <div>
        <p class="text-base font-light">{{ job }}</p>
      </div>
      <!-- Links -->
      <div class="flex gap-3">
        <NuxtLink to="/">
          <Twitter :size="18" />
        </NuxtLink>
        <NuxtLink to="/"> <Instagram :size="18" /> </NuxtLink
        ><NuxtLink to="/">
          <Linkedin :size="18" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
