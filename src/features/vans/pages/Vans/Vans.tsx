import { useSearchParams } from "react-router-dom"

import type { Van } from "@/shared/types/van"
import VanCard from "@/features/vans/components/VanCard"
import useFetch from "@/shared/hooks/useFetch"
import { cn, typeBg, typeHoverBg } from "@/shared/lib/cn"

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")

    const { data, loading, error } = useFetch<{ vans: Van[] }>("/api/vans")
    const vans = data?.vans || []
    const filteredVans = typeFilter ? vans.filter((van) => van.type === typeFilter) : vans

    const types = [...new Set(vans.map((v) => v.type))]

    function handleTypeChange(type: string | null) {
        setSearchParams((prev) => {
            if (type === null) {
                prev.delete("type")
            } else {
                prev.set("type", type)
            }

            return prev
        })
    }

    return (
        <div className="vans-container px-8">
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
                                    onClick={() => handleTypeChange(type)}
                                    className={cn(
                                        "cursor-pointer rounded px-5.5 py-1.5 text-base font-medium capitalize",
                                        type === typeFilter
                                            ? `${typeBg[type]}`
                                            : "bg-brand-ultra-light text-black-light",
                                        typeHoverBg[type],
                                    )}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                        {typeFilter && (
                            <button
                                onClick={() => handleTypeChange(null)}
                                className="cursor-pointer underline"
                            >
                                Clear filters
                            </button>
                        )}
                    </div>
                    <div className="my-8.5 grid justify-items-center gap-8.5 md:grid-cols-2">
                        {filteredVans.map((van) => (
                            <VanCard key={van.id} van={van} />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}
