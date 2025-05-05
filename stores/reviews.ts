import { defineStore } from 'pinia'

export const useReviewsStore = defineStore('reviews', {
  state: () => ({
    reviews: [] as any[],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchReviews() {
      this.loading = true
      this.error = null
      try {
        const response = await fetch('http://localhost:3001/api/v1/reviews')
        const data = await response.json()
        if (response.ok) {
          this.reviews = data.data.data
        } else {
          throw new Error(data.message || 'Failed to fetch reviews')
        }
      } catch (error: any) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },

    async fetchReviewById(id: string) {
      this.loading = true
      this.error = null
      try {
        const response = await fetch(`http://localhost:3001/api/v1/reviews/${id}`)
        const data = await response.json()
        if (response.ok) {
          return data.data.data
        } else {
          throw new Error(data.message || 'Failed to fetch review')
        }
      } catch (error: any) {
        this.error = error.message
        return null
      } finally {
        this.loading = false
      }
    },

    async createReview(reviewData: any) {
      this.loading = true
      this.error = null
      try {
        const getToken = () => {
          return process.client ? localStorage.getItem('token') : null
        }

        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getToken()}`
        }

        const response = await fetch('http://localhost:3001/api/v1/reviews', {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(reviewData),
        })
        const data = await response.json()
        if (response.ok) {
          this.reviews.push(data.data.data)
          return data.data.data
        } else {
          throw new Error(data.message || 'Failed to create review')
        }
      } catch (error: any) {
        this.error = error.message
        return null
      } finally {
        this.loading = false
      }
    },

    async updateReview(id: string, reviewData: any) {
      this.loading = true
      this.error = null
      try {
        const getToken = () => {
          return process.client ? localStorage.getItem('token') : null
        }

        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getToken()}`
        }

        const response = await fetch(`http://localhost:3001/api/v1/reviews/${id}`, {
          method: 'PUT',
          headers: headers,
          body: JSON.stringify(reviewData),
        })
        const data = await response.json()
        if (response.ok) {
          const index = this.reviews.findIndex(review => review.id === id)
          if (index !== -1) {
            this.reviews[index] = data.data.data
          }
          return data.data.data
        } else {
          throw new Error(data.message || 'Failed to update review')
        }
      } catch (error: any) {
        this.error = error.message
        return null
      } finally {
        this.loading = false
      }
    },

    async deleteReview(id: string) {
      this.loading = true
      this.error = null
      try {
        const getToken = () => {
          return process.client ? localStorage.getItem('token') : null
        }

        const headers = {
          'Authorization': `Bearer ${getToken()}`
        }

        const response = await fetch(`http://localhost:3001/api/v1/reviews/${id}`, {
          method: 'DELETE',
          headers: headers,
        })
        if (response.ok) {
          this.reviews = this.reviews.filter(review => review.id !== id)
        } else {
          const data = await response.json()
          throw new Error(data.message || 'Failed to delete review')
        }
      } catch (error: any) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },
  },
}) 