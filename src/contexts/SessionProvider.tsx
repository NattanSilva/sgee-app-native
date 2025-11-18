import { createContext, ReactNode, useContext, useMemo, useState } from 'react'

type SessionContextType = {
  isLogged: boolean
  setIsLogged: (value: boolean) => void
}

export const SessionContext = createContext<SessionContextType>(
  {} as SessionContextType
)

type Props = {
  children: ReactNode
}

export function SessionProvider({ children }: Props) {
  const [isLogged, setIsLogged] = useState<boolean>(false)

  // ⛑️ useMemo evita recriar o objeto value em cada render
  const value = useMemo(
    () => ({
      isLogged,
      setIsLogged,
    }),
    [isLogged] // só muda quando isLogged muda
  )

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  )
}

export function useSession() {
  const context = useContext(SessionContext)
  if (!context) {
    throw new Error('useSession must be used inside a SessionProvider')
  }
  return context
}


