<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="text-amber-400"
    :width="`${width}px`"
    :height="`${height}px`"
    viewBox="0 0 24 24"
  >
    <!-- Icon from Google Material Icons by Material Design Authors - https://github.com/material-icons/material-icons/blob/master/LICENSE -->
    <path
      fill="currentColor"
      d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z"
    ></path>
  </svg>
</template>

<script lang="ts" setup>
defineProps({
  width: String,
  height: String,
});
</script>
