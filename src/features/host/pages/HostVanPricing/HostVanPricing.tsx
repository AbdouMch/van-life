import { formatCurrency } from "@/shared/lib/format"
import { useHostVanContext } from "@/features/host/components/HostVanDetailsLayout"

export default function HostVanPricing() {
    const { van } = useHostVanContext()

    return (
        <p>
            <span className="text-2xl font-medium">{formatCurrency(van.price)}</span>/day
        </p>
    )
}
