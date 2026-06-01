import { cn, typeBg } from "@/shared/lib/cn"
import { formatCurrency } from "@/shared/lib/format"
import type { Van } from "@/shared/types/van"

type Props = {
    van: Van
}

export default function VanInfo({ van }: Props) {
    return (
        <>
            <div className="flex flex-col items-center">
                <img
                    src={van.imageUrl}
                    alt={`Photo of ${van.name}`}
                    className="max-h-220 w-auto rounded"
                />
            </div>
            <div className="mt-5">
                <span
                    className={cn(
                        typeBg[van.type],
                        "text-[1.25rem] font-medium",
                        "rounded px-3 py-1",
                    )}
                >
                    {van.type}
                </span>
            </div>
            <p className="mt-5 text-[2rem] font-extrabold text-black">{van.name}</p>
            <p className="mt-2 text-[1.5rem] font-medium text-black">
                <span className="text-[1.75rem] font-medium">{formatCurrency(van.price)}</span>
                <span className="text-[1.25rem] font-light">/ day</span>
            </p>
            <p className="mt-2 text-[1rem] font-medium text-black">{van.description}</p>
        </>
    )
}
