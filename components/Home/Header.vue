<script lang="ts" setup></script>

<template>
  <div
    class="border m-4 bg-black text-white py-2 px-7 flex items-center justify-between"
  >
    <div class="flex flex-col gap-5 md:w-60 justify-between">
      <!-- model name and icon -->
      <div class="flex items-center gap-4">
        <NuxtImg src="/imgs/header/apple-logo.png" class="md:w-[45px]" />
        <p class="capitalize font-light md:text-lg text-base">iPhone 14 Series</p>
      </div>
      <!-- promotion  -->
      <div>
        <p class="capitalize md:text-4xl text-2xl font-semibold">Up to 10% off Voucher</p>
      </div>
      <!-- shop Now -->
      <div class="my-2">
        <button class="flex gap-1 items-center group">
          <p class="capitalize md:text-xl text-lg border-b">Shop Now</p>
          <IconsArrowRight width="24" height="24" class="font-bold" />
        </button>
      </div>
    </div>
    <!-- model image -->
    <div>
      <NuxtImg src="/imgs/header/iphone.png" class="md:w-[550px]" />
    </div>
  </div>
  <!-- don't forget to add swiper here -->
</template>
