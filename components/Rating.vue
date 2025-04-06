<script lang="ts" setup>
const props = defineProps<{
  stars: number;
}>();
console.log(props.stars);
const fullStars = computed(() => Math.floor(props.stars));
const hasHalfStar = computed(() => props.stars % 1 >= 0.5);
const emptyStars = computed(
  () => 5 - fullStars.value - (hasHalfStar.value ? 1 : 0)
);
</script>

<template>
  <div class="flex items-center">
    <!-- full Star -->
    <IconsStar
      v-for="n in fullStars"
      :key="'full-' + n"
      width="22"
      height="22"
    />
    <!-- half Star -->
    <IconsStarHalf v-if="hasHalfStar" width="22" height="22" />
    <!-- empty Star -->
    <IconsStarOutline
      v-for="n in emptyStars"
      :key="'empty-' + n"
      width="22"
      height="22"
    />
  </div>
</template>
