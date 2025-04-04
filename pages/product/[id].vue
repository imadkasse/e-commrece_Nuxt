<script lang="ts" setup>
const route = useRoute();
console.log(route.params.id);
</script>

<template>
  <p>{{ route.params.id }}</p>
</template>
