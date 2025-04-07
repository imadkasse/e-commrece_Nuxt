<script lang="ts" setup>
import { Headset, ShieldCheck, Truck } from "lucide-vue-next";
</script>

<template>
  <div
    class="container mx-auto grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-8 mt-16 mb-6"
  >
    <!-- Delivery -->
    <div class="flex flex-col items-center">
      <!-- icon -->
      <div class="w-16 h-16 rounded-full bg-primary2 p-3 mb-3">
        <div
          class="bg-black w-full h-full rounded-full flex items-center justify-center"
        >
          <Truck :size="25" color="white" />
        </div>
      </div>
      <!-- Title -->
      <div>
        <h1 class="capitalize font-semibold md:text-lg text-sm">
          FREE AND FAST DELIVERY
        </h1>
      </div>
      <!-- Description -->
      <div>
        <p class="capitalize font-light text-sm">
          Free delivery for all orders over $140
        </p>
      </div>
    </div>
    <!-- Customer Service -->
    <div class="flex flex-col items-center">
      <!-- icon -->
      <div class="w-16 h-16 rounded-full bg-primary2 p-3 mb-3">
        <div
          class="bg-black w-full h-full rounded-full flex items-center justify-center"
        >
          <Headset :size="25" color="white" />
        </div>
      </div>
      <!-- Title -->
      <div>
        <h1 class="capitalize font-semibold md:text-lg text-sm">
          24/7 CUSTOMER SERVICE
        </h1>
      </div>
      <!-- Description -->
      <div>
        <p class="capitalize font-light text-sm">
          Friendly 24/7 customer support
        </p>
      </div>
    </div>
    <!-- Money Back -->
    <div class="flex flex-col items-center">
      <!-- icon -->
      <div class="w-16 h-16 rounded-full bg-primary2 p-3 mb-3">
        <div
          class="bg-black w-full h-full rounded-full flex items-center justify-center"
        >
          <ShieldCheck :size="25" color="white" />
        </div>
      </div>
      <!-- Title -->
      <div>
        <h1 class="capitalize font-semibold md:text-lg text-sm">
          MONEY BACK GUARANTEE
        </h1>
      </div>
      <!-- Description -->
      <div>
        <p class="capitalize font-light text-sm">
          We reurn money within 30 days
        </p>
      </div>
    </div>
  </div>
</template>
