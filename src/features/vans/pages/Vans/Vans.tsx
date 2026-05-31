import { Link } from "react-router-dom"

import type { Van } from "@/shared/types/van"
import VanCard from "@/features/vans/components/VanCard"
import PageWrapper from "./PageWrapper"
import useFetch from "@/shared/hooks/useFetch"

function Vans() {
    const { data, loading, error } = useFetch<{ vans: Van[] }>("/api/vans")
    const vans = data?.vans || []

    if (loading) {
        return (
            <PageWrapper>
                <p>Loading vans...</p>
            </PageWrapper>
        )
    }

    if (error) {
        return (
            <PageWrapper>
                <p className="text-red-500">Error: {error}</p>
            </PageWrapper>
        )
    }

    if (vans.length === 0) {
        return (
            <PageWrapper>
                <p>No vans found.</p>
            </PageWrapper>
        )
    }

    const types = [...new Set(vans.map((v) => v.type))]

    return (
        <PageWrapper>
            <div className="flex items-center justify-between">
                <div className="flex justify-between gap-2">
                    {types.map((type) => (
                        <button key={type} className="bg-brand-light cursor-pointer rounded p-2">
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
        </PageWrapper>
    )
}

export default Vans
