import type { Van } from "@/type"
import { formatCurrency } from "@/lib/format"

export default function HostVanCard({ van }: { van: Van }) {
    return (
        <div className="flex items-center gap-4">
            <img src={van.imageUrl} alt={van.name} className="h-40 rounded-md" />
            <div>
                <h3 className="text-2xl font-bold">{van.name}</h3>
                <p>{formatCurrency(van.price)}/day</p>
            </div>
        </div>
    )
}
