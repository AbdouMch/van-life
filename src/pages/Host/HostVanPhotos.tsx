import { useOutletContext } from "react-router-dom"
import type { Van } from "@/type"

export default function HostVanPhotos() {
    const { van } = useOutletContext<{ van: Van }>()

    return <img src={van.imageUrl} alt={van.name} className="h-40 rounded-md" />
}
