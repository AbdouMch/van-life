import { type ReactNode } from "react"
import { Link } from "react-router-dom"
import { cn } from "@/shared/lib/cn"

export default function PageWrapper({ children }: { children: ReactNode }) {
    return (
        <div className="mb-2 flex w-full flex-col gap-2 px-8">
            <Link to="/vans" className="text-left text-[1rem] text-black underline">
                Back to all vans
            </Link>
            <div className={cn("")}>{children}</div>
        </div>
    )
}
