<script lang="ts" setup>
import { Heart, RefreshCw, Truck } from "lucide-vue-next";

const props = defineProps<{
  images: string[];
  tilte: string;
  numRatings: number; // add in stoke (avilable)
  price: number;
  description: string;
}>();

const currentImg = ref("");

const changeCurrentImg = (index: number) => {
  currentImg.value = props.images[index];
};

onMounted(() => {
  currentImg.value = props.images[0];
});
</script>

<template>
  <!-- Product -->
  <div class="grid lg:grid-cols-3 grid-cols-1 gap-5">
    <div class="lg:col-span-2">
      <div
        class="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-12 max-sm:gap-8"
      >
        <div class="w-full col-span-2 lg:sticky top-2">
          <div class="flex flex-row gap-2">
            <!-- images -->
            <div class="flex h-full flex-col gap-3 w-24 max-sm:w-14 shrink-0">
              <NuxtImg
                v-for="(img, index) in images"
                :src="img"
                alt="Product1"
                @click="changeCurrentImg(index)"
                :class="[
                  'bg-secondary2 p-4 object-cover object-top w-full cursor-pointer',
                  currentImg === img
                    ? 'border-b-2 border-[rgba(0,0,0,0.6)]'
                    : '',
                ]"
              />
            </div>
            <!-- current image -->
            <div
              class="flex-1 p-8 bg-secondary2 flex justify-center items-center"
            >
              <NuxtImg
                :src="currentImg"
                alt="Product"
                class="object-contain max-h-full max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Details -->
    <div class="flex flex-col gap-1 ">
      <!-- name Product -->
      <div>
        <h1 class="capitalize text-2xl font-semibold">{{ tilte }}</h1>
      </div>
      <!-- Rating , (num Ratings) and status (in stoke or not) -->
      <div class="flex items-center gap-2">
        <div class="border-r-2 pr-2 flex items-center gap-2">
          <Rating :stars="4" />
          <p class="text-gray-300 text-sm">({{ numRatings }} Reviews)</p>
        </div>
        <div>
          <p class="text-green-300 font-semibold text-sm">In Stock</p>
        </div>
      </div>
      <!-- price -->
      <div>
        <h1 class="text-xl font-medium">$ {{ price }}.00</h1>
      </div>
      <!-- description -->
      <div>
        <p class="text-base font-light line-clamp-3">
          {{ description }}
        </p>
      </div>
      <!-- Size -->
      <div class="flex gap-5 items-center">
        <div>
          <h1 class="text-lg">Size:</h1>
        </div>
        <div class="flex items-center gap-4">
          <div
            class="w-[32px] h-[32px] border cursor-pointer border-[rgba(0,0,0,0.3)] flex justify-center items-center rounded-sm"
          >
            XS
          </div>
          <div
            class="w-[32px] h-[32px] border cursor-pointer border-[rgba(0,0,0,0.3)] flex justify-center items-center rounded-sm"
          >
            S
          </div>
          <div
            class="w-[32px] h-[32px] bg-secondary text-white flex justify-center items-center rounded-sm"
          >
            M
          </div>
          <div
            class="w-[32px] h-[32px] border cursor-pointer border-[rgba(0,0,0,0.3)] flex justify-center items-center rounded-sm"
          >
            L
          </div>
          <div
            class="w-[32px] h-[32px] border cursor-pointer border-[rgba(0,0,0,0.3)] flex justify-center items-center rounded-sm"
          >
            XL
          </div>
        </div>
      </div>
      <!-- Quantity , Buy Now btn and Favorite btn -->
      <div class="flex items-center gap-4">
        <!-- Quantity -->
        <div class="flex items-center gap-3 my-4">
          <div class="flex items-center border rounded-md overflow-hidden">
            <!-- Minus button -->
            <button
              class="bg-secondary2 text-black px-3 py-1 text-lg hover:opacity-90"
            >
              -
            </button>

            <!-- Quantity display -->
            <span
              class="px-4 py-1 text-base bg-white text-gray-800 min-w-[32px] text-center"
            >
              1
            </span>

            <!-- Plus button -->
            <button
              class="bg-secondary text-white px-3 py-1 text-lg hover:opacity-90"
            >
              +
            </button>
          </div>
        </div>

        <!-- Buy Now btn -->

        <button
          class="flex-1 capitalize bg-secondary text-white px-4 py-[6px] rounded-md hover:bg-hoverBtn transition duration-200"
        >
          Buy Now
        </button>
        <!-- Favorite btn -->

        <button
          class="capitalize border border-gray-300 text-black p-2 rounded-md hover:bg-gray-200 transition duration-200"
        >
          <Heart :size="18" color="black" />
        </button>
      </div>
      <!-- Features  -->
      <div class="border border-[rgba(0,0,0,0.5)] rounded-md">
        <!-- Free Delivery -->
        <div
          class=" p-5 border-b border-[rgba(0,0,0,0.5)] flex items-center gap-3"
        >
          <div>
            <Truck color="black" :size="30" />
          </div>
          <div class="capitalize">
            <h1 class="text-lg font-medium">Free Delivery</h1>
            <p class="font-light">
              Enter your postal code for Delivery Availability
            </p>
          </div>
        </div>
        <!-- Return Delivery  -->
        <div class="p-5 flex items-center gap-4">
          <div>
            <RefreshCw color="black" :size="30" />
          </div>
          <div class="capitalize">
            <h1 class="text-lg font-medium">Return Delivery</h1>
            <p class="text-base font-light">
              Free 30 Days Delivery Returns. Details
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
