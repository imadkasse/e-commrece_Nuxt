<template>
  <div>
    <button v-if="showButton" @click="scrollToTop" class="fixed bottom-[20px] right-[20px] rounded-full cursor-pointer bg-secondary2 p-[10px]">
      <ArrowUp :size="18" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ArrowUp } from "lucide-vue-next";
const showButton = ref(false);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const handleScroll = () => {
  showButton.value = window.pageYOffset > 100;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style>
.scroll-to-top-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  border-radius: 50%;
  background-color: #0077cc;
  color: white;
  font-size: 16px;
  cursor: pointer;
}
</style>
