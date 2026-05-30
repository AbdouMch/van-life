import type { Van } from "@/type"
import { Link } from "react-router-dom"

import { cn, typeBg } from "@/lib/cn"
import { formatCurrency } from "@/lib/format"

type Props = {
    van: Van
}

export default function Van({ van }: Props) {
    return (
        <div className="group flex flex-col gap-2">
            <div className="relative">
                <img
                    src={van.imageUrl}
                    alt={`Image of ${van.name}`}
                    className="max-h-220 w-auto rounded"
                />
                <Link
                    to={`/vans/${van.id}`}
                    className={cn(
                        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                        "bg-brand-light text-black-light rounded px-4 py-2 font-semibold",
                        "opacity-0 transition-opacity group-hover:opacity-100 focus:opacity-100",
                        "hover:bg-brand hover:text-white",
                    )}
                    aria-label={`View details for ${van.name}, priced at ${formatCurrency(van.price)} per day`}
                >
                    View details
                </Link>
            </div>

            <div className="flex justify-between text-xl">
                <p>{van.name}</p>
                <div className="">
                    <p>{formatCurrency(van.price)}</p>
                    <p className="-mt-2">/day</p>
                </div>
            </div>
            <div>
                <span className={cn(typeBg[van.type], "rounded px-2 py-1 text-white")}>
                    {van.type}
                </span>
            </div>
        </div>
    )
}
