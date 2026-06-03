import logo from "@/assets/images/logog.svg"
import userCircle from "@/assets/images/user-circle.svg"

import { Link } from "react-router-dom"
import MainNavLink from "@/shared/components/MainNavLink"
import { useAuth } from "@/context/AuthContext"

export default function Header() {
    const { user } = useAuth()

    return (
        <header className="bg-cream flex h-27.75 w-full items-center justify-between px-6.5">
            <Link to="/">
                <img src={logo} alt="logo" className="h-10.25" />
            </Link>
            <div className="flex items-center gap-5">
                <nav className="flex gap-5">
                    {user && <MainNavLink to="/host">Host</MainNavLink>}
                    <MainNavLink to="/vans">Vans</MainNavLink>
                    <MainNavLink to="/about">About</MainNavLink>
                    {!user && <MainNavLink to="/login">Login</MainNavLink>}
                </nav>
                {user && <img src={userCircle} alt="user circle" className="h-6.25" />}
            </div>
        </header>
    )
}
