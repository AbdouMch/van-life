import { Link, useParams } from "react-router-dom"

import type { Van } from "@/shared/types/van"
import useFetch from "@/shared/hooks/useFetch"
import VanInfo from "./VanInfo"
import useVansSearchQueryLinkState from "@/features/vans/hooks/useVansSearchQueryLinkState"

export default function VanDetails() {
    const { id } = useParams()
    const { data, loading, error } = useFetch<{ van: Van }>(`/api/vans/${id}`)
    const van = data?.van || null

    const { searchQuery, typeFilter } = useVansSearchQueryLinkState()
    const backLabel = typeFilter ? `Back to ${typeFilter} vans` : "Back to all vans"

    return (
        <div className="flex w-full flex-col p-8">
            <Link
                to={`..?${searchQuery}`}
                relative="path"
                className="text-left text-[1rem] text-black underline"
            >
                &larr; {backLabel}
            </Link>
            <div className="mt-10">
                {loading && <p>Loading vans...</p>}
                {error && <p className="text-red-500">Error: {error}</p>}
                {!loading && !error && van === null && <p>Van not found.</p>}
                {van && <VanInfo van={van} />}
            </div>
        </div>
    )
}
