import { useOutletContext } from "react-router-dom"
import type { Van } from "@/shared/types/van"

export default function HostVanPhotos() {
    const { van } = useOutletContext<{ van: Van }>()

    return (
        <div className="h-40">
            <img src={van.imageUrl} alt={van.name} className="h-full rounded-[5px]" />
        </div>
    )
}
