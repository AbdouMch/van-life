import { Link, Outlet, useParams } from "react-router-dom"

import { useAuth } from "@/context/AuthContext"
import useFetch from "@/shared/hooks/useFetch"
import type { Van } from "@/shared/types/van"
import { formatCurrency } from "@/shared/lib/format"
import { cn, typeBg } from "@/shared/lib/cn"
import HostVanNavLink from "@/features/host/components/HostVanNavLink"

export default function HostVanDetailsLayout() {
    const { id } = useParams()
    const { user } = useAuth()

    const { data, loading, error } = useFetch<{ van: Van }>(`/api/host/${user?.id}/vans/${id}`)
    const van = data?.van || null

    function renderVan() {
        if (loading) {
            return <p>Loading...</p>
        }

        if (error) {
            return <p>Error: {error}</p>
        }

        if (van === null) {
            return <p>Van not found.</p>
        }

        return (
            <>
                <div className="flex items-center gap-4">
                    <img src={van.imageUrl} alt={van.name} className="h-40 rounded-md" />
                    <div>
                        <span
                            className={cn(
                                typeBg[van.type],
                                "rounded px-3 py-1 font-semibold text-white capitalize",
                            )}
                        >
                            {van.type}
                        </span>
                        <h3 className="mt-5 text-2xl font-bold">{van.name}</h3>
                        <p className="mt-5">
                            <span className="text-xl font-bold">{formatCurrency(van.price)}</span>
                            /day
                        </p>
                    </div>
                </div>
                <nav className="mt-10 flex gap-4">
                    <HostVanNavLink end to={`/host/vans/${id}`}>
                        Details
                    </HostVanNavLink>
                    <HostVanNavLink to={`/host/vans/${id}/pricing`}>Pricing</HostVanNavLink>
                    <HostVanNavLink to={`/host/vans/${id}/photos`}>Photos</HostVanNavLink>
                </nav>
                <div className="mt-10">
                    <Outlet context={{ van }} />
                </div>
            </>
        )
    }

    return (
        <div className="px-8">
            <Link to="/host/vans" className="underline">
                Back to all vans
            </Link>
            <div className="mt-10 flex flex-col bg-white p-6">{renderVan()}</div>
        </div>
    )
}
