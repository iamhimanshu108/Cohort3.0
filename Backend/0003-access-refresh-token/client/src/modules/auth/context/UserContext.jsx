import { useCallback, useEffect, useMemo, useState } from 'react'
import UserContext from './user-context.js'

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [accessToken, setAccessToken] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const clearSession = useCallback(() => {
    setUser(null)
    setAccessToken(null)
  }, [])

  const startSession = useCallback(({ user: nextUser, accessToken: nextAccessToken }) => {
    setUser(nextUser)
    setAccessToken(nextAccessToken)
  }, [])

  const refreshSession = useCallback(async () => {
    try {
      const refreshResponse = await fetch('/api/auth/refresh', {
        method: 'POST',
        credentials: 'include',
      })

      if (!refreshResponse.ok) {
        clearSession()
        return false
      }

      const { data } = await refreshResponse.json()
      const nextAccessToken = data.accessToken
      const profileResponse = await fetch('/api/auth/me', {
        headers: { Authorization: `Bearer ${nextAccessToken}` },
        credentials: 'include',
      })

      if (!profileResponse.ok) {
        clearSession()
        return false
      }

      const profile = await profileResponse.json()
      startSession({ user: profile.data.user, accessToken: nextAccessToken })
      return true
    } catch {
      clearSession()
      return false
    }
  }, [clearSession, startSession])

  useEffect(() => {
    async function loadSession() {
      await refreshSession()
      setIsLoading(false)
    }

    loadSession()
  }, [refreshSession])

  const value = useMemo(() => ({
    user,
    accessToken,
    isAuthenticated: Boolean(user && accessToken),
    isLoading,
    startSession,
    clearSession,
    refreshSession,
  }), [user, accessToken, isLoading, startSession, clearSession, refreshSession])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
