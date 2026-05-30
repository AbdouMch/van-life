import { formatCurrency } from "@/lib/format"
import { useOutletContext } from "react-router-dom"
import type { Van } from "@/type"

export default function HostVanPricing() {
    const { van } = useOutletContext<{ van: Van }>()

    return (
        <p>
            <span className="text-2xl font-medium">{formatCurrency(van.price)}</span>/day
        </p>
    )
}
