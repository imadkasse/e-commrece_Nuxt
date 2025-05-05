<script lang="ts" setup>
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
      <p class="capitalize font-mono">
        Welcome! <span class="text-secondary">Imad</span>
      </p>
    </div>
    <!-- simple sideBar-->
    <div class="flex gap-9 mt-16 flex-wrap">
      <ProfileSideBar />
      <!-- Show componenet -->
      <div class="border shadow-sm shadow-gray-200 py-7 px-8 flex-grow">
        <ProfileEditProfile />
      </div>
    </div>
  </div>
</template>
