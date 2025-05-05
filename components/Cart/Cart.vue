<script lang="ts" setup>
const { total , editTotal} = useCartStore()
const totalPriceProducts =ref(2750) // change this to true price 
onMounted(()=>{
  editTotal(totalPriceProducts.value)
})
console.log(total);
</script>

<template>
  <div class="mt-16 mx-4">
    <!-- table -->
    <table class="table border-separate border-spacing-y-4 w-full">
      <!-- table header -->
      <thead>
        <tr class="shadow-md rounded-md">
          <th class="px-12 py-3 text-left">Product</th>
          <th class="px-12 py-3 text-left">Price</th>
          <th class="px-12 py-3 text-left">Quantity</th>
          <th class="px-12 py-3 text-left">Subtotal</th>
        </tr>
      </thead>
      <!-- items -->
      <tbody class="">
        <CartItem
          name="LCD Monitor"
          url="/imgs/products/prod4.png"
          :price="650"
        />
        <CartItem name="Bag" url="/imgs/products/prod1.png" :price="750" />
      </tbody>
    </table>
    <!-- Btns -->
    <div class="w-full flex justify-between my-4">
      <NuxtLink
        to="/"
        class="capitalize border border-gray-300 text-black md:px-8 md:py-3 px-4 py-2 rounded-md hover:bg-gray-200 transition duration-200"
      >
        Return To Shop
      </NuxtLink>
      <NuxtLink
        to="/"
        class="capitalize border border-gray-300 text-black md:px-8 md:py-3 px-4 py-2 rounded-md hover:bg-gray-200 transition duration-200"
      >
        Update Cart
      </NuxtLink>
    </div>
    <!-- coupon code and cart total -->
    <div class="flex justify-between items-start gap-[35px]">
      <!-- coupon code  -->
      <div class="flex gap-3 items-center">
        <input
          type="text"
          placeholder="Coupon Code"
          class="border border-gray-400 py-2 px-4 rounded-sm outline-none"
        />
        <button
          class="capitalize border bg-secondary text-white md:px-8 px-4 py-2 rounded-md hover:bg-hoverBtn transition duration-200"
        >
          Apply Coupon
        </button>
      </div>
      <!-- cart tota  -->
      <div class="min-w-[470px] border border-black capitalize p-6 flex flex-col gap-5 rounded-md">
        <h1 class="md:text-2xl text-lg">Cart Total</h1>
        <div class="border-b py-2 flex justify-between">
          <p class="text-lg font-light">Subtotal:</p>
          <p class="font-light">${{ total }}</p>
        </div>
        <div class="border-b py-2 flex justify-between">
          <p class="text-lg font-light">Shipping:</p>
          <p class="font-light">free</p>
        </div>
        <div class="border-b py-2 flex justify-between">
          <p class="text-lg font-light">Total:</p>
          <p class="font-light">${{ total }}</p>
        </div>
        <!-- btn -->
        <div class="flex justify-center">
          <button
            class="capitalize border bg-secondary text-white md:px-8 px-4 py-2 rounded-md hover:bg-hoverBtn transition duration-200"
          >
            Procees to checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
