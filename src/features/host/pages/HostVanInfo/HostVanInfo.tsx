import { useHostVanContext } from "@/features/host/components/HostVanDetailsLayout"

export default function HostVanInfo() {
    const { van } = useHostVanContext()

    return (
        <>
            <p className="mb-4">
                <span className="font-bold">Name : </span> {van.name}
            </p>
            <p className="mb-4">
                <span className="font-bold">Category : </span>{" "}
                <span className="capitalize">{van.type}</span>
            </p>
            <p className="mb-4">
                <span className="font-bold">Description : </span> {van.description}
            </p>
            <p>
                <span className="font-bold">Visibility : </span> Public
            </p>
        </>
    )
}
