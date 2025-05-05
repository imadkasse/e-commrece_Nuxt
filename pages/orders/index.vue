<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="pt-12 pb-24">
        <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Order History
        </h1>

        <div class="mt-12">
          <div v-if="orders.length === 0" class="text-center">
            <h2 class="text-2xl font-medium text-gray-900">No orders yet</h2>
            <p class="mt-4 text-gray-500">
              You haven't placed any orders yet. Start shopping to see your orders here.
            </p>
            <div class="mt-6">
              <NuxtLink
                to="/products"
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Start Shopping
              </NuxtLink>
            </div>
          </div>

          <div v-else class="space-y-8">
            <div
              v-for="order in orders"
              :key="order.id"
              class="bg-white shadow overflow-hidden sm:rounded-lg"
            >
              <div class="px-4 py-5 sm:px-6">
                <div class="flex justify-between">
                  <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Order #{{ order.id }}
                  </h3>
                  <p class="text-sm text-gray-500">
                    {{ new Date(order.createdAt).toLocaleDateString() }}
                  </p>
                </div>
                <div class="mt-1 max-w-2xl text-sm text-gray-500">
                  <p>Status: {{ order.status }}</p>
                </div>
              </div>
              <div class="border-t border-gray-200">
                <dl>
                  <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">Total Amount</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      ${{ order.total }}
                    </dd>
                  </div>
                  <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">Items</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <ul class="border border-gray-200 rounded-md divide-y divide-gray-200">
                        <li
                          v-for="item in order.items"
                          :key="item.id"
                          class="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                        >
                          <div class="w-0 flex-1 flex items-center">
                            <span class="ml-2 flex-1 w-0 truncate">
                              {{ item.name }}
                            </span>
                          </div>
                          <div class="ml-4 flex-shrink-0">
                            <span class="text-gray-500">
                              {{ item.quantity }} × ${{ item.price }}
                            </span>
                          </div>
                        </li>
                      </ul>
                    </dd>
                  </div>
                  <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">Shipping Address</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {{ order.shippingAddress }}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const ordersStore = useOrdersStore()

const orders = computed(() => ordersStore.orders)

onMounted(async () => {
  await ordersStore.fetchUserOrders()
})
</script> 