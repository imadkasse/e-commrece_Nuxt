<script lang="ts" setup></script>

<template>
  <div class="mt-12 mx-4">
    <!-- header -->
    <div class="flex items-center gap-4">
      <div class="w-4 h-7 rounded-sm bg-secondary"></div>
      <p class="capitalize font-medium text-secondary">Featured</p>
    </div>
    <!-- title  -->
    <div class="flex items-center justify-between mt-4">
      <p class="capitalize md:text-2xl text-lg font-semibold">New Arrival</p>
    </div>

    <!-- Show Collections -->
    <section class="mt-9 grid lg:grid-cols-2 grid-cols-1 gap-[30px]">
      <!-- Ps5 -->
      <div class="bg-black rounded px-4 pt-8 relative flex">
        <!-- title -->
        <div
          class="text-white absolute bottom-5 px-5 py-4 flex flex-col items-start gap-3"
        >
          <h1 class="capitalize font-semibold md:text-lg">PlayStation 5</h1>
          <p class="mt-3 capitalize font-extralight md:w-[242px] w-[170px]">
            Black and White version of the PS5 coming out on sale.
          </p>
          <button class="capitalize border-b border-white">Shop Now</button>
        </div>
        <!-- image -->
        <div class="w-full">
          <NuxtImg src="/imgs/feature/ps5.png" class="w-full object-cover" />
        </div>
      </div>
      <!-- Women's and Speakers and Perfume -->
      <div class="grid grid-cols-1 md:grid-rows-2 gap-[30px]">
        <!-- Women's -->
        <div class="bg-black rounded h-[284px] relative flex items-end">
          <!-- title -->
          <div
            class="text-white absolute z-10 px-5 py-4 flex flex-col items-start gap-3"
          >
            <h1 class="capitalize font-semibold md:text-lg">
              Women’s Collections
            </h1>
            <p class="mt-3 capitalize font-extralight md:w-[242px] w-[170px]">
              Featured woman collections that give you another vibe.
            </p>
            <button class="capitalize border-b border-white">Shop Now</button>
          </div>
          <!-- image -->
          <div class="h-full px-1 absolute bottom-0 right-0">
            <NuxtImg
              src="/imgs/feature/women.png"
              alt="تحتوي على صورة إمرأة"
              class="object-cover h-full text-white"
            />
          </div>
        </div>
        <!-- Speakers and Perfume -->
        <div class="grid md:grid-cols-2 grid-cols-1 gap-[30px]">
          <!-- Speakers -->
          <div class="bg-black rounded h-[284px] relative flex items-end">
            <!-- title -->
            <div
              class="text-white absolute z-10 px-5 py-4 flex flex-col items-start gap-1"
            >
              <h1 class="capitalize font-semibold md:text-lg">Speakers</h1>
              <p class="mt-1 capitalize font-extralight md:w-[242px] w-[170px]">
                Amazon wireless speakers
              </p>
              <button class="capitalize border-b border-white">Shop Now</button>
            </div>
            <!-- image -->
            <div
              class="lg:w-[210px] lg:h-[222px] md:w-[190px] md:h-[200px] sm:w-[170px] sm:h-[170px] px-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <NuxtImg
                src="/imgs/feature/speaker.png"
                class="object-cover h-full"
              />
            </div>
          </div>
          <!-- Perfume  -->
          <div class="bg-black rounded h-[284px] relative flex items-end">
            <!-- title -->
            <div
              class="text-white absolute z-10 px-5 py-4 flex flex-col items-start gap-1"
            >
              <h1 class="capitalize font-semibold md:text-lg">Perfume</h1>
              <p class="mt-1 capitalize font-extralight md:w-[242px] w-[170px]">
                GUCCI INTENSE OUD EDP
              </p>
              <button class="capitalize border-b border-white">Shop Now</button>
            </div>
            <!-- image -->
            <div
              class="lg:w-[210px] lg:h-[222px] md:w-[190px] md:h-[200px] sm:w-[170px] sm:h-[170px] px-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <NuxtImg
                src="/imgs/feature/perfume.png"
                class="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
