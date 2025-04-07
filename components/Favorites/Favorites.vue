<script lang="ts" setup></script>

<template>
  <div class="mt-16 mx-4">
    <!-- title and btn `View All` -->
    <div class="flex items-center justify-between mt-4">
      <p class="capitalize md:text-2xl text-lg font-semibold">Wishlist (4)</p>
      <NuxtLink
        to="/"
        class="capitalize border border-gray-300 text-black md:px-8 md:py-3 px-4 py-2 rounded-md hover:bg-gray-200 transition duration-200"
      >
        Move All To Bag
      </NuxtLink>
    </div>
    <!-- Cards -->
    <div class="container mx-auto px-8 py-4 mt-5">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <FavoritesCard
          title="bag"
          price="200"
          url="/imgs/products/prod1.png"
          oldPrice="360"
        />
        <FavoritesCard
          title="bag"
          price="200"
          url="/imgs/products/prod3.png"
          oldPrice="360"
        />
        <FavoritesCard
          title="bag"
          price="200"
          url="/imgs/products/prod5.png"
          oldPrice="360"
        />
        <FavoritesCard
          title="bag"
          price="200"
          url="/imgs/products/prod6.png"
          oldPrice="360"
        />
      </div>
    </div>
  </div>
</template>
