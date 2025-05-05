<script lang="ts" setup>
const { user } = useUserInfo();
</script>

<template>
  <div class="">
    <!-- title -->
    <h1 class="font-semibold text-2xl text-secondary mb-3">
      Edit Your Profile
    </h1>
    <form class="flex flex-col gap-6">
      <!-- Full name-->
      <div
        class="flex md:flex-nowrap flex-wrap justify-between items-center gap-[30px]"
      >
        <!-- Full name -->
        <div class="flex flex-col gap-2 w-full">
          <label class="capitalize text-sm font-[500]">first name</label>
          <input
            type="text"
            :placeholder="user.username || 'kasse'"
            class="p-2 bg-inputColor outline-none rounded"
          />
        </div>
      </div>
      <!-- email and address -->
      <div
        class="flex md:flex-nowrap flex-wrap justify-between items-center gap-[30px]"
      >
        <div class="flex flex-col gap-2 w-full">
          <label class="capitalize text-sm font-[500]">email</label>
          <input
            type="email"
            :placeholder="user.email || 'kasse@gm.com'"
            class="p-2 bg-inputColor outline-none rounded"
          />
        </div>
        <div class="flex flex-col gap-2 w-full">
          <label class="capitalize text-sm font-[500]">address</label>
          <input
            type="text"
            placeholder="Kingston, 5236, United State"
            class="p-2 bg-inputColor outline-none rounded"
          />
        </div>
      </div>

      <!-- btns -->
      <div class="flex gap-4 justify-end">
        <button
          type="submit"
          class="capitalize bg-secondary text-white md:px-8 md:py-3 px-4 py-2 rounded-sm hover:bg-hoverBtn transition duration-200"
        >
          Save Changes
        </button>
      </div>
    </form>
    <form class="flex flex-col gap-6">
      <!-- change Password -->
      <div>
        <div class="flex flex-col gap-3 w-full">
          <label class="capitalize text-sm font-[500]">Password Changes</label>
          <div class="flex flex-col gap-4">
            <input
              type="password"
              placeholder="Current Passwod"
              class="p-3 bg-inputColor outline-none rounded"
            />
            <input
              type="password"
              placeholder="New Passwod"
              class="p-3 bg-inputColor outline-none rounded"
            />
            <input
              type="password"
              placeholder="Confirm New Passwod"
              class="p-3 bg-inputColor outline-none rounded"
            />
          </div>
        </div>
      </div>
      <!-- btns -->
      <div class="flex gap-4 justify-end">
        <button
          type="submit"
          class="capitalize bg-secondary text-white md:px-8 md:py-3 px-4 py-2 rounded-sm hover:bg-hoverBtn transition duration-200"
        >
          Save Changes
        </button>
      </div>
    </form>
  </div>
</template>
