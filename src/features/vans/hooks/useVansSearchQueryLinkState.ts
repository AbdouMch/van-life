import { useLocation } from "react-router-dom"
import type { VanLinkState } from "@/features/vans/types/VanLinkState"

export default function useVansSearchQueryLinkState(): VanLinkState {
    const location = useLocation()

    return {
        searchQuery: location.state?.searchQuery || "",
        typeFilter: location.state?.typeFilter ?? null,
    }
}
