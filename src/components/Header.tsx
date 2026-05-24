import logo from "@/assets/images/logog.svg"

import { Link } from "react-router-dom"
import MainNavLink from "@/components/MainNavLink.tsx"

export default function Header() {
    return (
        <header className="bg-cream flex h-27.75 w-full items-center justify-between px-6.5">
            <Link to="/">
                <img src={logo} alt="logo" className="h-10.25" />
            </Link>
            <nav className="flex gap-5">
                <MainNavLink to="/vans">Vans</MainNavLink>
                <MainNavLink to="/about">About</MainNavLink>
            </nav>
        </header>
    )
}
