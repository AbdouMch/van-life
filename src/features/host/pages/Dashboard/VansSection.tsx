import { Link } from "react-router-dom"

import HostVanCard from "@/features/host/components/HostVanCard"
import type { Van } from "@/shared/types/van"
import { useAuth } from "@/context/AuthContext"
import useFetch from "@/shared/hooks/useFetch"

export default function VansSection() {
    const { user } = useAuth()

    const { data, loading, error } = useFetch<{ vans: Van[] }>(`/api/host/${user?.id}/vans`)

    const vans = data?.vans || []

    return (
        <>
            <div className="flex w-full items-center justify-between">
                <h2 className="text-2xl font-bold">Your listed vans</h2>
                <Link to="/host/vans" className="text-black hover:underline">
                    View all
                </Link>
            </div>
            <div className="mt-8 flex w-full flex-col gap-2">
                {loading && <p>Loading vans...</p>}
                {error && <p className="text-red-500">Error: {error}</p>}
                {!loading && !error && vans.length === 0 && <p>No vans found.</p>}
                {vans.length > 0 &&
                    vans.map((van) => (
                        <div
                            key={van.id}
                            className="m-auto flex w-full items-center justify-between rounded-md bg-white px-8 py-4"
                        >
                            <HostVanCard van={van} />
                            <Link
                                to={`/host/vans/${van.id}`}
                                className="text-black hover:underline"
                            >
                                Edit
                            </Link>
                        </div>
                    ))}
            </div>
        </>
    )
}
