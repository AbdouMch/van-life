import { type ReactNode } from "react"

export default function PageWrapper({ children }: { children: ReactNode }) {
    return (
        <div className="vans-container mb-2 px-8">
            <h1 className="text-left text-[2.5rem] font-extrabold text-black">
                Explore our van options
            </h1>
            {children}
        </div>
    )
}
