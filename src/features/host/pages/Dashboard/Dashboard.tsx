import { Link } from "react-router-dom"
import { Star } from "lucide-react"
import { formatCurrency } from "@/shared/lib/format"
import { useAuth } from "@/context/AuthContext"
import useFetch from "@/shared/hooks/useFetch"
import type { Van } from "@/shared/types/van"
import HostVanCard from "@/features/host/components/HostVanCard"

export default function Dashboard() {
    const totalIncome = 2260
    const reviewScore = 4.5

    const { user } = useAuth()

    const {
        data,
        loading: loadingVans,
        error: vansError,
    } = useFetch<{ vans: Van[] }>(`/api/host/${user?.id}/vans`)
    const vans = data?.vans || null

    function renderVans() {
        if (loadingVans) {
            return <p>Loading ...</p>
        }

        if (vansError) {
            return <p>Error: {vansError}</p>
        }

        if (vans === null || vans.length === 0) {
            return <p>No vans found.</p>
        }

        return vans.map((van) => (
            <div
                key={van.id}
                className="m-auto flex w-full items-center justify-between rounded-md bg-white px-8 py-4"
            >
                <HostVanCard van={van} />
                <Link to={`/host/vans/${van.id}`} className="text-black hover:underline">
                    Edit
                </Link>
            </div>
        ))
    }

    return (
        <>
            <div className="bg-dashboard-income w-full px-7 py-10">
                <h1 className="text-3xl font-bold">Welcome!</h1>
                <div className="mt-5 flex justify-between">
                    <p className="text-muted">
                        Income last <span className="text-black underline">30 days</span>
                    </p>
                    <Link to="/host/income" className="text-black hover:underline">
                        Details
                    </Link>
                </div>
                <p className="mt-8 text-4xl font-extrabold">{formatCurrency(totalIncome)}</p>
            </div>
            <div className="bg-dashboard-review flex w-full items-center justify-between px-7 py-10">
                <h2 className="flex items-center gap-2 text-2xl font-bold">
                    <span>Review score</span>
                    <Star className="fill-brand text-brand inline-block h-6 w-6" />
                    <span>{reviewScore}</span>
                    <span className="text-xl font-medium">/5</span>
                </h2>
                <Link to="/host/reviews" className="text-black hover:underline">
                    Details
                </Link>
            </div>
            <div className="px-7 py-10">
                <div className="flex w-full items-center justify-between">
                    <h2 className="text-2xl font-bold">Your listed vans</h2>
                    <Link to="/host/vans" className="text-black hover:underline">
                        View all
                    </Link>
                </div>
                <div className="mt-8 flex w-full flex-col gap-2">{renderVans()}</div>
            </div>
        </>
    )
}
