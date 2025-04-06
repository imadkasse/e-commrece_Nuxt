<script lang="ts" setup>
const props = defineProps<{
  url: string;
  stars: number;
  title: string;
  price: string;
  oldPrice?: string;
}>();
</script>

<template>
  <div class="flex flex-col gap-1 w-[270px]">
    <!-- image & view icon & favorite icon and addToCart btn -->
    <div
      class="bg-secondary2 group relative rounded-md overflow-hidden w-full h-[250px]"
    >
      <div class="p-5 flex justify-center items-center h-full">
        <NuxtImg
          :src="url"
          class="w-[150px] object-cover transition-transform duration-200 group-hover:scale-105"
        />

        <div class="flex flex-col gap-1">
          <div
            class="bg-white p-1 rounded-full w-7 justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:cursor-pointer absolute top-2 right-3"
          >
            <IconsEyeOutline width="18" />
          </div>
          <div
            class="bg-white p-1 rounded-full w-7 justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:cursor-pointer absolute top-10 right-3"
          >
            <IconsHeart width="18" />
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
      <h1 class="md:text-sm font-medium">{{ title }}</h1>
    </div>
    <!-- new Price and old Price -->
    <div class="flex items-center gap-2">
      <h1 class="font-medium text-xs text-secondary">${{ price }}</h1>
      <h1 class="font-normal text-xs text-gray-400 line-through">${{oldPrice}}</h1>
    </div>
    <!-- Rating and Number of Rating -->
    <div class="flex items-center gap-2">
      <Rating :stars="3.5" />
      <p class="text-gray-400">(55)</p>
    </div>
  </div>
</template>
