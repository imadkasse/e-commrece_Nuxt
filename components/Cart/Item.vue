<script lang="ts" setup>
const props = defineProps<{
  name: string;
  price: number;
  url: string;
}>();
const quantity = ref(1);
const totalPrice = ref(props.price * quantity.value);

watch(quantity, (newVal) => {
  totalPrice.value = props.price * newVal;
});
</script>

<template>
  <tr class="shadow-md rounded-md">
    <td class="px-12 py-3 text-left flex items-center gap-4">
      <NuxtImg :src="url" class="w-12 h-12 object-fit" />
      <p class="text-md capitalize font-medium">{{ name }}</p>
    </td>
    <td class="px-12 py-3 text-left">${{ price }}</td>
    <td class="px-12 py-3 text-left">
      <input
        type="number"
        v-model.number="quantity"
        class="w-16 px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-sm"
      />
    </td>
    <td class="px-12 py-3 text-left">${{ totalPrice }}</td>
  </tr>
</template>
