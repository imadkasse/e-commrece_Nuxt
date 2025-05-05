<script lang="ts" setup>
import { Heart, RefreshCw, Truck } from "lucide-vue-next";

const route = useRoute();
const currentPath = route.fullPath.split("/")[1];
</script>

<template>
  <div class="mt-16 mx-4">
    <!-- show current route -->
    <div class="flex justify-between items-center my-24">
      <p class="capitalize font-mono">
        <span class="text-gray-300"> Home / </span>
        <span class="text-gray-300"> {{ currentPath }} / </span>
        <!-- show name product  -->
        {{ route.params.id }}
      </p>
    </div>
    <!-- Current Product -->
    <div class="my-7">
      <ProductCurrentProduct
        :images="['/imgs/product/img1.png','/imgs/product/img2.png','/imgs/product/img3.png','/imgs/product/img4.png','/imgs/product/img5.png']"
        tilte="Havic HV G-92 Gamepad"
        :price="912"
        description="PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."
        :num-ratings="150"
      />
    </div>
    <!-- Related Item  -->
    <div class="flex items-center gap-4">
      <div class="w-4 h-7 rounded-sm bg-secondary"></div>
      <p class="capitalize font-medium text-secondary">Related Item</p>
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
        <Card
          title="Ecran Ips"
          :stars="4"
          price="200"
          url="/imgs/products/prod4.png"
          oldPrice="360"
        />
      </div>
    </div>
  </div>
</template>
