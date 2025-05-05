<script lang="ts" setup>
import { DollarSign, HandCoins, Luggage, Store } from "lucide-vue-next";

const route = useRoute();
const currentPath = route.fullPath.split("/")[1];
</script>

<template>
  <div class="mt-16 mx-4">
    <!-- show current route -->
    <div class="flex justify-between items-center">
      <p class="capitalize font-mono">
        <span class="text-gray-300"> Home / </span>
        {{ currentPath }}
      </p>
    </div>
    <!-- Our Story -->
    <div class="mt-16 flex sm:flex-col lg:flex-row gap-[30px] items-center">
      <!-- text -->
      <div>
        <h1 class="capitalize text-[54px] font-bold">Our Story</h1>
        <p
          class="text-base font-light capitalize flex flex-col gap-5 w-[525px] mt-5"
        >
          <span
            >Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </span>
          <span
            >Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.</span
          >
        </p>
      </div>
      <!-- image -->
      <div class="w-full">
        <NuxtImg
          src="/imgs/about/aboutImg.png"
          alt="Womens img"
          class="w-full"
        />
      </div>
    </div>
    <!-- Cards -->
    <div
      class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px] mt-24"
    >
      <AboutCard title="Sallers active our site" :num="10.5" :icon="Store" />
      <AboutCard title="Mopnthly Produduct Sale" :num="33" :icon="DollarSign" />
      <AboutCard
        title="Customer active in our site"
        :num="45.5"
        :icon="Luggage"
      />
      <AboutCard
        title="Anual gross sale in our site"
        :num="25"
        :icon="HandCoins"
      />
    </div>
    <!-- testimonials -->
    <div class="flex justify-center overflow-x-auto mt-16 gap-[30px]">
      <AboutTestMonials
        url="/imgs/about/users/user1.png"
        name="Tom Cruise"
        job="Founder & Chairman"
      />
      <AboutTestMonials
        url="/imgs/about/users/user2.png"
        name="Emma Watson"
        job="Managing Director"
      />
      <AboutTestMonials
        url="/imgs/about/users/user3.png"
        name="Will Smith"
        job="Product Designer"
      />
    </div>
    <!-- Feature -->
    <div class="mt-24 mb-24">
      <HomeFeature />
    </div>
  </div>
</template>
