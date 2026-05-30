import { useParams } from "react-router-dom"

import type { Van as VanType } from "@/type"
import useFetch from "@/hooks/useFetch"
import { cn, typeBg } from "@/lib/cn"

import PageWrapper from "@/pages/VanDetails/PageWrapper"
import { formatCurrency } from "@/lib/format"

export default function VanDetails() {
    const { id } = useParams()
    const { data, loading, error } = useFetch<{ van: VanType }>(`/api/vans/${id}`)
    const van = data?.van || null

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

    if (van === null) {
        return (
            <PageWrapper>
                <p>Van not found.</p>
            </PageWrapper>
        )
    }

    return (
        <PageWrapper>
            <div className="flex flex-col items-center">
                <img
                    src={van.imageUrl}
                    alt={`Photo of ${van.name}`}
                    className="max-h-220 w-auto rounded"
                />
            </div>
            <div className="mt-5">
                <span
                    className={cn(
                        typeBg[van.type],
                        "text-[1.25rem] font-medium text-white capitalize",
                        "rounded px-3 py-1",
                    )}
                >
                    {van.type}
                </span>
            </div>
            <p className="mt-5 text-[2rem] font-extrabold text-black">{van.name}</p>
            <p className="mt-2 text-[1.5rem] font-medium text-black">
                <span className="text-[1.75rem] font-medium">{formatCurrency(van.price)}</span>
                <span className="text-[1.25rem] font-light">/ day</span>
            </p>
            <p className="mt-2 text-[1rem] font-medium text-black">{van.description}</p>
        </PageWrapper>
    )
}
