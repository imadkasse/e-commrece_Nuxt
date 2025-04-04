<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
const data = await $fetch(`${runtimeConfig.public.API_URL}/api/v1/products`);
const products = data.data.data;
console.log(products)
</script>

<template>
  <h1>hello in products page</h1>
  <div class="flex" v-for="product in products">
    <Product :name="product.name" :description="product.description" :price="product.price" />
  </div>
</template>
