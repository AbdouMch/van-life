import { Outlet } from "react-router-dom"

import HostNavLink from "@/features/host/components/HostNavLink"

export default function HostLayout() {
    return (
        <div className="mt-5 w-full">
            <nav className="mb-10 flex gap-5 px-8">
                <HostNavLink end to="/host">
                    Dashboard
                </HostNavLink>
                <HostNavLink to="/host/income">Income</HostNavLink>
                <HostNavLink to="/host/vans">Vans</HostNavLink>
                <HostNavLink to="/host/reviews">Reviews</HostNavLink>
            </nav>
            <Outlet />
        </div>
    )
}
