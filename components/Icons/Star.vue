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
      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
    ></path>
  </svg>
</template>

<script lang="ts" setup>
defineProps({
  width: String,
  height: String,
});
</script>
