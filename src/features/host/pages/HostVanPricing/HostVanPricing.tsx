import { useOutletContext } from "react-router-dom"
import { formatCurrency } from "@/shared/lib/format"
import type { Van } from "@/shared/types/van"

export default function HostVanPricing() {
    const { van } = useOutletContext<{ van: Van }>()

    return (
        <p>
            <span className="text-2xl font-medium">{formatCurrency(van.price)}</span>/day
        </p>
    )
}
