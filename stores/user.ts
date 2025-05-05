import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as any,
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchUserProfile() {
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

        const response = await fetch('http://localhost:3001/api/v1/users/me', {
          headers: headers,
        })
        const data = await response.json()
        if (response.ok) {
          this.user = data.data.data
        } else {
          throw new Error(data.message || 'Failed to fetch user profile')
        }
      } catch (error: any) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },

    async updateUserProfile(userData: any) {
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

        const response = await fetch('http://localhost:3001/api/v1/users/update-user', {
          method: 'PUT',
          headers: headers,
          body: JSON.stringify(userData),
        })
        const data = await response.json()
        if (response.ok) {
          this.user = { ...this.user, ...data.data.data }
        } else {
          throw new Error(data.message || 'Failed to update user profile')
        }
      } catch (error: any) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },

    async updatePassword(currentPassword: string, newPassword: string) {
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

        const response = await fetch('http://localhost:3001/api/v1/users/update-password', {
          method: 'PUT',
          headers: headers,
          body: JSON.stringify({ currentPassword, newPassword }),
        })
        const data = await response.json()
        if (!response.ok) {
          throw new Error(data.message || 'Failed to update password')
        }
      } catch (error: any) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },

    async deleteUser() {
      this.loading = true
      this.error = null
      try {
        const getToken = () => {
          return process.client ? localStorage.getItem('token') : null
        }

        const headers = {
          'Authorization': `Bearer ${getToken()}`
        }

        const response = await fetch('http://localhost:3001/api/v1/users/delete-user', {
          method: 'DELETE',
          headers: headers,
        })
        if (!response.ok) {
          const data = await response.json()
          throw new Error(data.message || 'Failed to delete user')
        }
        this.user = null
        localStorage.removeItem('token')
      } catch (error: any) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },
  },
}) 