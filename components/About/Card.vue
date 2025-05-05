<script lang="ts" setup>
import { Store } from "lucide-vue-next";
import type { Component } from "vue";

const props = defineProps<{
  num: number;
  title: string;
  icon: Component;
}>();
</script>

<template>
  <div
    :class="` rounded flex flex-col items-center gap-3 py-5 ${
      title === 'Mopnthly Produduct Sale'
        ? 'bg-secondary text-white'
        : 'border border-[rgba(0,0,0,0.3)]'
    }`"
  >
    <!-- icon -->
    <div
      :class="` rounded-full p-2 ${
        title === 'Mopnthly Produduct Sale' ? 'bg-white/20 ' : 'bg-primary2/30 '
      }`"
    >
      <div
        :class="` rounded-full p-1 ${
          title === 'Mopnthly Produduct Sale'
            ? 'bg-white '
            : 'bg-black text-white'
        }`"
      >
        <component
          :is="icon"
          :size="24"
          :color="`${title === 'Mopnthly Produduct Sale' ? 'black' : ''}`"
        />
      </div>
    </div>
    <div class="flex flex-col items-center">
      <!-- Number -->
      <div>
        <h1 class="text-2xl font-bold">{{ num }}k</h1>
      </div>
      <!-- text -->
      <div>
        <p class="font-light text-base">{{ title }}</p>
      </div>
    </div>
  </div>
</template>
