import { NavLink, type NavLinkProps } from "react-router-dom"
import { cn } from "@/lib/cn"

export default function HostNavLink(props: NavLinkProps) {
    return (
        <NavLink
            {...props}
            className={({ isActive }) =>
                cn(
                    "text-lg font-semibold",
                    isActive ? "text-black underline" : "text-muted no-underline",
                )
            }
        />
    )
}
