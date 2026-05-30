import { useAuth } from "@/context/AuthContext"
import useFetch from "@/hooks/useFetch"
import type { Van } from "@/type"
import HostVanCard from "@/components/Host/HostVanCard"
import { Link } from "react-router-dom"

export default function HostVans() {
    const { user } = useAuth()

    const {
        data,
        loading: loadingVans,
        error: vansError,
    } = useFetch<{ vans: Van[] }>(`/api/host/${user?.id}/vans`)

    const vans = data?.vans || null

    function renderVans() {
        if (loadingVans) {
            return <p>Loading ...</p>
        }

        if (vansError) {
            return <p>Error: {vansError}</p>
        }

        if (vans === null || vans.length === 0) {
            return <p>No vans found.</p>
        }

        return vans.map((van) => (
            <Link
                key={van.id}
                to={`/host/vans/${van.id}`}
                className="m-auto flex w-full items-center rounded-md bg-white px-8 py-4 hover:opacity-90"
            >
                <HostVanCard van={van} />
            </Link>
        ))
    }

    return (
        <div className="px-7 py-10">
            <h1 className="mb-8 text-2xl font-bold">Your listed vans</h1>
            <div className="flex flex-col gap-2">{renderVans()}</div>
        </div>
    )
}
