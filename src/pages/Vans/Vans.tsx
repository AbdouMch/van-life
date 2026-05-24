import { Link } from "react-router-dom"

import type { Van as VanType } from "@/type"

import Van from "@/pages/Vans/Van.tsx"
import PageWrapper from "@/pages/Vans/PageWrapper.tsx"
import useFetch from "@/hooks/useFetch.ts"

function Vans() {
    const { data, loading, error } = useFetch<{ vans: VanType[] }>("/api/vans")
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
            <div className="list mt-5 grid gap-2 md:grid-cols-2">
                {vans.map((van) => (
                    <Van key={van.id} van={van} />
                ))}
            </div>
        </PageWrapper>
    )
}

export default Vans
