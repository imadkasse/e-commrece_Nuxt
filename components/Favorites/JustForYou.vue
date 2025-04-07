<script lang="ts" setup></script>

<template>
  <div class="my-6 mx-4">
    <div class="flex items-center justify-between mt-4">
      <div class="flex items-center gap-4">
        <div class="w-4 h-7 rounded-sm bg-secondary"></div>
        <p class="capitalize font-medium text-secondary">Just For You</p>
      </div>
      <NuxtLink
        to="/"
        class="capitalize border border-gray-300 text-black md:px-8 md:py-3 px-4 py-2 rounded-md hover:bg-gray-200 transition duration-200"
      >
        see all
      </NuxtLink>
    </div>
    <!-- Cards -->
    <div class="container mx-auto px-8 py-4 mt-5">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <Card
          title="bag"
          :stars="4"
          price="200"
          url="/imgs/products/prod1.png"
          oldPrice="360"
        />
        <Card
          title="bag"
          :stars="4"
          price="200"
          url="/imgs/products/prod5.png"
          oldPrice="360"
        />
        <Card
          title="mantte"
          :stars="4"
          price="200"
          url="/imgs/products/prod2.png"
          oldPrice="360"
        />
        <Card
          title="Water Cooling"
          :stars="4"
          price="200"
          url="/imgs/products/prod3.png"
          oldPrice="360"
        />
      </div>
    </div>
  </div>
</template>
