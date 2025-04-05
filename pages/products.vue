<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
// const data = await $fetch(`${runtimeConfig.public.API_URL}/api/v1/products`);
const products = [
  {
    name: "t-shirt",
    description: "description",
    price: 200,
  },
  {
    name: "t-shirt 2",
    description: "description 2",
    price: 200,
  },
  {
    name: "t-shirt 3",
    description: "description 3",
    price: 200,
  },
];
useSeoMeta({
  title: "Products",
});
</script>

<template>
  <h1>hello in products page</h1>
  <div class="grid grid-cols-3">
    <div class="" v-for="product in products">
      <Product
        :name="product.name"
        :description="product.description"
        :price="product.price"
      />
    </div>
  </div>
</template>
