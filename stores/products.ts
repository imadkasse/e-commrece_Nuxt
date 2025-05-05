import { CloudCog } from 'lucide-vue-next'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [] as any[],
    cart: [] as any[],
    favorites: [] as any[],
    loading: false,
    error: null as string | null,
  }),

  getters: {
    cartTotal: (state) => {
      return state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
    },
    cartItemCount: (state) => {
      return state.cart.reduce((count, item) => count + item.quantity, 0)
    },
  },

  actions: {
    async fetchProducts() {
      this.loading = true
      this.error = null
      try {
        const response = await fetch('http://localhost:3001/api/v1/products')
        const data = await response.json()
        if (response.ok) {
          this.products = data.data.data
        } else {
          throw new Error(data.message || 'Failed to fetch products')
        }
      } catch (error: any) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },

    async fetchProductById(id: string) {
      this.loading = true
      this.error = null
      try {
        const response = await fetch(`http://localhost:3001/api/v1/products/${id}`)
        const data = await response.json()
        if (response.ok) {
          return data.data.data
        } else {
          throw new Error(data.message || 'Failed to fetch product')
        }
      } catch (error: any) {
        this.error = error.message
        return null
      } finally {
        this.loading = false
      }
    },

    async addToCart(product: any, quantity: number = 1) {
      const existingItem = this.cart.find(item => item.id === product.id)
      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        this.cart.push({ ...product, quantity })
      }
    },

    async removeFromCart(productId: string) {
      this.cart = this.cart.filter(item => item.id !== productId)
    },

    async updateCartItemQuantity(productId: string, quantity: number) {
      const item = this.cart.find(item => item.id === productId)
      if (item) {
        item.quantity = quantity
      }
    },

    async addToFavorites(productId: string) {
      try {
        const getToken = () => {
          return process.client ? localStorage.getItem('token') : null
        }

        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getToken()}`
        }

        const response = await fetch(`http://localhost:3001/api/v1/products/favorite/${productId}`, {
          method: 'POST',
          headers: headers,
        })
        if (response.ok) {
          const product = await this.fetchProductById(productId)
          if (product) {
            this.favorites.push(product)
          }
        }
      } catch (error: any) {
        this.error = error.message
      }
    },

    async removeFromFavorites(productId: string) {
      try {
        const getToken = () => {
          return process.client ? localStorage.getItem('token') : null
        }

        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getToken()}`
        }

        const response = await fetch(`http://localhost:3001/api/v1/products/favorite/${productId}`, {
          method: 'DELETE',
          headers: headers,
        })
        if (response.ok) {
          this.favorites = this.favorites.filter(item => item.id !== productId)
        }
      } catch (error: any) {
        this.error = error.message
      }
    },

    async fetchFavorites() {
      try {
        const getToken = () => {
          return process.client ? localStorage.getItem('token') : null
        }

        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getToken()}`
        }

        const response = await fetch('http://localhost:3001/api/v1/products/favorite/allItems', {
          headers: headers,
        })
        if (response.ok) {
          const data = await response.json()
          this.favorites = data.data.data
        }
      } catch (error: any) {
        this.error = error.message
      }
    },
  },
}) 