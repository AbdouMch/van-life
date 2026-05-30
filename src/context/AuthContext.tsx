import { createContext, useContext, useState } from "react"

type User = {
    id: string
}

type AuthContextValue = {
    user: User | null
}

const AuthContext = createContext<AuthContextValue | null>(null)

// TODO Swap this provider's internals when real auth arrives — pages stay untouched.
export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user] = useState<User | null>({ id: "123" })

    return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth(): AuthContextValue {
    const ctx = useContext(AuthContext)
    if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>")
    return ctx
}
