import { NavLink, type NavLinkProps } from "react-router-dom"
import { cn } from "@/lib/cn"

export default function HostVanNavLink(props: NavLinkProps) {
    return (
        <NavLink
            {...props}
            className={({ isActive }) =>
                cn(
                    "text-base",
                    isActive ? "font-bold text-black underline" : "text-muted no-underline",
                )
            }
        />
    )
}
