interface User {
  data: {
    user: {
      username: string
      email: string
      role: string
    }
  }
}

export const useAuth = () => {
  const token = useState<string | null>('token', () => null)
  const user = useState<User | null>('user', () => null)
  const isAuthenticated = useState<boolean>('isAuthenticated', () => false)
  const isInitialized = useState<boolean>('isInitialized', () => false)
  const runtimeConfig = useRuntimeConfig()

  // دالة مساعدة للوصول الآمن إلى localStorage
  const getLocalStorage = (key: string) => {
    if (process.client && typeof window !== 'undefined') {
      try {
        return window.localStorage.getItem(key)
      } catch (e) {
        console.error('Error accessing localStorage:', e)
        return null
      }
    }
    return null
  }

  const setLocalStorage = (key: string, value: string) => {
    if (process.client && typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(key, value)
      } catch (e) {
        console.error('Error setting localStorage:', e)
      }
    }
  }

  const removeLocalStorage = (key: string) => {
    if (process.client && typeof window !== 'undefined') {
      try {
        window.localStorage.removeItem(key)
      } catch (e) {
        console.error('Error removing from localStorage:', e)
      }
    }
  }

  // تهيئة القيم من localStorage عند إنشاء المتجر
  if (process.client && typeof window !== 'undefined') {
    token.value = getLocalStorage('token')
    const userData = getLocalStorage('user')
    if (userData) {
      try {
        user.value = JSON.parse(userData)
        isAuthenticated.value = !!token.value
      } catch (e) {
        console.error('Error parsing user data:', e)
        removeLocalStorage('user')
        removeLocalStorage('token')
      }
    }
  }

  const login = async (credentials: { email: string; password: string }) => {
    try {
      const response = await fetch(`${runtimeConfig.public.API_URL}/api/v1/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      })

      if (!response.ok) {
        throw new Error('Login failed')
      }

      const data = await response.json()
      token.value = data.token
      user.value = data
      isAuthenticated.value = true
      
      setLocalStorage('token', data.token)
      setLocalStorage('user', JSON.stringify(data))
    } catch (error) {
      console.error('Login error:', error)
      throw error
    }
  }

  const logout = () => {
    token.value = null
    user.value = null
    isAuthenticated.value = false
    removeLocalStorage('token')
    removeLocalStorage('user')
  }

  const checkAuth = async () => {
    if (!token.value) {
      isAuthenticated.value = false
      return
    }

    try {
      const response = await fetch(`${runtimeConfig.public.API_URL}/api/v1/auth/me`, {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      })

      if (!response.ok) {
        throw new Error('Authentication failed')
      }

      const data = await response.json()
      user.value = data
      isAuthenticated.value = true
      setLocalStorage('user', JSON.stringify(data))
    } catch (error) {
      console.error('Auth check error:', error)
      logout()
    }
  }

  const initialize = async () => {
    if (isInitialized.value) return
    
    if (process.client && typeof window !== 'undefined') {
      if (token.value) {
        await checkAuth()
      } else {
        logout()
      }
    }
    
    isInitialized.value = true
  }

  const register = async (credentials: { username: string; email: string; password: string }) => {
    try {
      const response = await fetch(`${runtimeConfig.public.API_URL}/api/v1/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      })

      if (!response.ok) {
        throw new Error('Registration failed')
      }

      const data = await response.json()
      token.value = data.token
      user.value = data
      isAuthenticated.value = true
      
      setLocalStorage('token', data.token)
      setLocalStorage('user', JSON.stringify(data))
    } catch (error) {
      console.error('Registration error:', error)
      throw error
    }
  }

  // Initialize auth state on store creation
  if (process.client) {
    initialize()
  }

  return {
    token,
    user,
    isAuthenticated,
    isInitialized,
    login,
    logout,
    checkAuth,
    initialize,
    register,
  }
} 