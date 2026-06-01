import { useHostVanContext } from "@/features/host/components/HostVanDetailsLayout"

export default function HostVanPhotos() {
    const { van } = useHostVanContext()

    return (
        <div className="h-40">
            <img src={van.imageUrl} alt={van.name} className="h-full rounded-[5px]" />
        </div>
    )
}
