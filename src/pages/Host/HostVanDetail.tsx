import { useOutletContext } from "react-router-dom"
import type { Van } from "@/type"

export default function HostVanDetail() {
    const { van } = useOutletContext<{ van: Van }>()

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
