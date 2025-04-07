<script lang="ts" setup>
import { Eye, Heart, Trash2 } from "lucide-vue-next";

const props = defineProps<{
  url: string;
  title: string;
  price: string;
  oldPrice?: string;
}>();
</script>

<template>
  <div class="flex flex-col gap-1 min-w-[270px]">
    <!-- image & view icon & favorite icon and addToCart btn -->
    <div
      class="bg-secondary2 group relative rounded-md overflow-hidden w-full h-[250px]"
    >
      <div class="p-5 flex justify-center items-center h-full">
        <NuxtImg
          :src="url"
          class="w-[150px] object-cover transition-transform duration-200 group-hover:scale-105"
        />

        <div class="flex flex-col">
          <div
            class="bg-white p-1 rounded-full w-7 justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:cursor-pointer absolute top-3 right-3"
          >
            <Trash2 :size="18" />
          </div>
        </div>
      </div>

      <div
        class="absolute w-full bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      >
        <button
          class="bg-black rounded-b-xl text-white capitalize text-center w-full py-2"
        >
          add to cart
        </button>
      </div>
    </div>

    <!-- title -->
    <div>
      <h1 class="md:text-lg font-medium">{{ title }}</h1>
    </div>
    <!-- new Price and old Price -->
    <div class="flex items-center gap-2">
      <h1 class="font-medium text-xs text-secondary">${{ price }}</h1>
      <h1 class="font-normal text-xs text-gray-400 line-through">
        ${{ oldPrice }}
      </h1>
    </div>
  </div>
</template>
