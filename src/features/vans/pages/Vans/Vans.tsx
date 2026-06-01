import { Link } from "react-router-dom"

import type { Van } from "@/shared/types/van"
import VanCard from "@/features/vans/components/VanCard"
import useFetch from "@/shared/hooks/useFetch"

function Vans() {
    const { data, loading, error } = useFetch<{ vans: Van[] }>("/api/vans")
    const vans = data?.vans || []

    const types = [...new Set(vans.map((v) => v.type))]

    return (
        <div className="vans-container mb-2 px-8">
            <h1 className="text-left text-[2.5rem] font-extrabold text-black">
                Explore our van options
            </h1>
            {loading && <p>Loading vans...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}
            {!loading && !error && vans.length === 0 && <p>No vans found.</p>}
            {vans.length > 0 && (
                <>
                    <div className="flex items-center justify-between">
                        <div className="flex justify-between gap-2">
                            {types.map((type) => (
                                <button
                                    key={type}
                                    className="bg-brand-light cursor-pointer rounded p-2"
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                        <Link to="/vans" className="underline">
                            Clear filters
                        </Link>
                    </div>
                    <div className="mt-5 grid gap-2 md:grid-cols-2">
                        {vans.map((van) => (
                            <VanCard key={van.id} van={van} />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default Vans
