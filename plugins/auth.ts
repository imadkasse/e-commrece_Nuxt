export default defineNuxtPlugin({
  name: 'auth-init',
  enforce: 'pre',
  async setup(nuxtApp) {
    // Initialize auth only on client side
    if (process.client) {
      const auth = useAuth()
      await auth.initialize()
    }
  }
}) 