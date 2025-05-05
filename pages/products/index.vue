<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-baseline justify-between border-b border-gray-200 pt-12 pb-6">
        <h1 class="text-4xl font-extrabold tracking-tight text-gray-900">Products</h1>

        <div class="flex items-center space-x-4">
          <div class="relative inline-block text-left">
            <div>
              <button
                type="button"
                class="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                @click="isSortOpen = !isSortOpen"
              >
                Sort
                <svg
                  class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div
              v-if="isSortOpen"
              class="absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5"
            >
              <div class="py-1">
                <button
                  v-for="option in sortOptions"
                  :key="option.value"
                  class="block px-4 py-2 text-sm w-full text-left"
                  :class="{
                    'text-gray-900': sort === option.value,
                    'text-gray-500': sort !== option.value,
                  }"
                  @click="handleSort(option.value)"
                >
                  {{ option.label }}
                </button>
              </div>
            </div>
          </div>

          <button
            type="button"
            class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click="isFilterOpen = !isFilterOpen"
          >
            <svg class="mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
            </svg>
            Filters
          </button>
        </div>
      </div>

      <div class="pt-12 pb-24">
        <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          <!-- Filters -->
          <div class="hidden lg:block" :class="{ 'lg:block': isFilterOpen }">
            <div class="border-b border-gray-200 py-6">
              <h3 class="text-lg font-medium text-gray-900">Price Range</h3>
              <div class="mt-4 space-y-4">
                <div class="flex items-center">
                  <input
                    id="price-0"
                    v-model="priceFilter"
                    type="radio"
                    value="0-50"
                    class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label for="price-0" class="ml-3 text-sm text-gray-600">$0 - $50</label>
                </div>
                <div class="flex items-center">
                  <input
                    id="price-1"
                    v-model="priceFilter"
                    type="radio"
                    value="50-100"
                    class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label for="price-1" class="ml-3 text-sm text-gray-600">$50 - $100</label>
                </div>
                <div class="flex items-center">
                  <input
                    id="price-2"
                    v-model="priceFilter"
                    type="radio"
                    value="100-200"
                    class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label for="price-2" class="ml-3 text-sm text-gray-600">$100 - $200</label>
                </div>
                <div class="flex items-center">
                  <input
                    id="price-3"
                    v-model="priceFilter"
                    type="radio"
                    value="200+"
                    class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label for="price-3" class="ml-3 text-sm text-gray-600">$200+</label>
                </div>
              </div>
            </div>

            <div class="border-b border-gray-200 py-6">
              <h3 class="text-lg font-medium text-gray-900">Categories</h3>
              <div class="mt-4 space-y-4">
                <div
                  v-for="category in categories"
                  :key="category"
                  class="flex items-center"
                >
                  <input
                    :id="category"
                    v-model="selectedCategories"
                    type="checkbox"
                    :value="category"
                    class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <label :for="category" class="ml-3 text-sm text-gray-600">
                    {{ category }}
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- Product grid -->
          <div class="lg:col-span-3">
            <div v-if="loading" class="flex justify-center items-center h-64">
              <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
            <div v-else-if="filteredProducts.length === 0" class="text-center py-12">
              <h3 class="text-lg font-medium text-gray-900">No products found</h3>
              <p class="mt-2 text-sm text-gray-500">Try adjusting your filters to find what you're looking for.</p>
            </div>
            <div v-else class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 ">
              <Card
                v-for="product in filteredProducts"
                
                :key="product._id"
                :title="product.name"
                :stars="product.avgReviews"
                :price="product.price"
                :url="product.images[0]"
                :id="product._id"
                oldPrice="360"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const productsStore = useProductsStore()
const isSortOpen = ref(false)
const isFilterOpen = ref(false)
const sort = ref('newest')
const priceFilter = ref('')
const selectedCategories = ref<string[]>([])
const loading = ref(false)

const sortOptions = [
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
]

const categories = computed(() => {
  const uniqueCategories = new Set<string>()
  productsStore.products.forEach(product => {
    if (product.category) {
      uniqueCategories.add(product.category)
    }
  })
  return Array.from(uniqueCategories)
})

const filteredProducts = computed(() => {
  let products = [...productsStore.products]
  

  // Apply price filter
  if (priceFilter.value) {
    const [min, max] = priceFilter.value.split('-').map(Number)
    products = products.filter(product => {
      if (max) {
        return product.price >= min && product.price <= max
      } else {
        return product.price >= min
      }
    })
  }

  // Apply category filter
  if (selectedCategories.value.length > 0) {
    products = products.filter(product => 
      selectedCategories.value.includes(product.category)
    )
  }

  // Apply sort
  switch (sort.value) {
    case 'newest':
      products.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      break
    case 'price-asc':
      products.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      products.sort((a, b) => b.price - a.price)
      break
  }

  return products
})

const handleSort = (value: string) => {
  sort.value = value
  isSortOpen.value = false
}

const addToCart = (product: any) => {
  
  productsStore.addToCart(product)
}

onMounted(async () => {
  loading.value = true
  await productsStore.fetchProducts()
  loading.value = false
})
</script> 