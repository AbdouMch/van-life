import { useActionState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "@/context/AuthContext"
import LoginError from "./LoginError"
import type { LoginState } from "@/shared/types/LoginState"

export default function Login() {
    const { login } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const loginState = location.state as LoginState | null

    const redirectTo = loginState?.redirectTo ?? "/host"
    const authGuardRedirectMessage = loginState?.message ?? null

    const [error, loginAction, isPending] = useActionState(
        async (_prev: string | null, formData: FormData) => {
            const email = formData.get("email") as string
            const password = formData.get("password") as string
            try {
                await login(email, password)
                navigate(redirectTo, { replace: true })
                return null
            } catch {
                return "Wrong email or password."
            }
        },
        null,
    )

    return (
        <div className="mt-12.75 w-full px-8">
            <h1 className="text-center text-2xl font-bold">Sign in to your account</h1>
            {error && <LoginError message={error} />}
            {!error && authGuardRedirectMessage && (
                <LoginError message={authGuardRedirectMessage} />
            )}
            <form action={loginAction} className="mt-10 flex w-full flex-col">
                <input
                    type="email"
                    placeholder="Email address"
                    name="email"
                    className="shadow-sm-custom border-border-grey w-full rounded-t-md border bg-white py-2.5 pl-3.25 placeholder:text-black"
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="shadow-sm-custom border-border-grey w-full rounded-b-md border bg-white py-2.5 pl-3.25 placeholder:text-black"
                />
                <button
                    disabled={isPending}
                    className="bg-brand mt-5 cursor-pointer rounded-md px-4 py-4.5 text-lg font-bold text-white disabled:opacity-60"
                >
                    {isPending ? "Signing in…" : "Sign in"}
                </button>
                <p className="mt-5 text-center text-lg font-medium">
                    Don't have an account?{" "}
                    <Link to="." className="text-brand font-bold">
                        Create one now
                    </Link>
                </p>
            </form>
        </div>
    )
}
