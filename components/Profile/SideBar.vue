<script lang="ts" setup></script>

<template>
  <div class="flex flex-col gap-3 ">
    <!-- manage My Account -->
    <div class="flex flex-col gap-4">
      <h1 class="capitalize font-[400]">Manage My Account</h1>
      <ul class="mx-5 flex flex-col gap-1">
        <li>
          <button
            class="capitalize text-secondary hover:text-hoverBtn transition duration-200"
          >
            My Profile
          </button>
        </li>
        <li>
          <button
            class="capitalize text-gray-300 hover:text-gray-400 transition duration-200"
          >
            Address Book
          </button>
        </li>
        <li>
          <button
            class="capitalize text-gray-300 hover:text-gray-400 transition duration-200"
          >
            My Payment Options
          </button>
        </li>
      </ul>
    </div>
    <!-- My Orders -->
    <div class="flex flex-col gap-4">
      <h1 class="capitalize font-[400]">My Orders</h1>

      <ul class="mx-5 flex flex-col gap-1">
        <li>
          <button
            class="capitalize text-gray-300 hover:text-gray-400 transition duration-200"
          >
            My Returns
          </button>
        </li>
        <li>
          <button
            class="capitalize text-gray-300 hover:text-gray-400 transition duration-200"
          >
            My Cancellations
          </button>
        </li>
      </ul>
    </div>
    <!-- My Wishlist -->
    <div class="flex flex-col gap-4">
      <h1 class="capitalize font-[400]">My WishList</h1>
    </div>
  </div>
</template>
