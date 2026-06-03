import { Navigate, Outlet, useLocation } from "react-router-dom"

import { useAuth } from "@/context/AuthContext"
import type { LoginState } from "@/shared/types/LoginState"

export default function AuthGuard() {
    const { user } = useAuth()
    const location = useLocation()

    if (!user) {
        const loginState: LoginState = {
            message: "You must be logged in to view this page.",
            redirectTo: location.pathname + location.search,
        }

        return <Navigate to="/login" state={loginState} />
    }

    return <Outlet />
}
