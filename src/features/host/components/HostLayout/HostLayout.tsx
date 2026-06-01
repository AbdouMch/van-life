import { Outlet } from "react-router-dom"

import HostNavLink from "@/features/host/components/HostNavLink"

export default function HostLayout() {
    return (
        <div className="mt-5 w-full">
            <nav className="mb-10 flex gap-5 px-8">
                <HostNavLink end to=".">
                    Dashboard
                </HostNavLink>
                <HostNavLink to="income">Income</HostNavLink>
                <HostNavLink to="vans">Vans</HostNavLink>
                <HostNavLink to="reviews">Reviews</HostNavLink>
            </nav>
            <Outlet />
        </div>
    )
}
