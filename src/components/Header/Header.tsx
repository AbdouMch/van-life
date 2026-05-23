import logo from "@/assets/images/logog.svg"

import type { ReactNode } from "react"
import { Link } from "react-router-dom"

type Props = {
    children: ReactNode
}

export default function Header({ children }: Props) {
    return (
        <header className="bg-cream flex h-27.75 w-full items-center justify-between px-6.5">
            <Link to="/">
                <img src={logo} alt="logo" className="h-10.25" />
            </Link>
            <nav className="flex gap-5">{children}</nav>
        </header>
    )
}
