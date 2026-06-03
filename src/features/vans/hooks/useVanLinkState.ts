import { useSearchParams } from "react-router-dom"
import type { VanLinkState } from "@/features/vans/types/VanLinkState"

export default function useVanLinkState(): VanLinkState {
    const [searchParams] = useSearchParams()

    return {
        searchQuery: searchParams.toString(),
        typeFilter: searchParams.get("type") || null,
    }
}
