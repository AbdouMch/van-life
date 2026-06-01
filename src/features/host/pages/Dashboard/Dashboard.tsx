import VansSection from "./VansSection"
import ReviewSection from "./ReviewSection"
import IncomeSection from "./IncomeSection"

export default function Dashboard() {
    return (
        <>
            <div className="bg-dashboard-income w-full px-7 py-10">
                <IncomeSection />
            </div>
            <div className="bg-dashboard-review flex w-full items-center justify-between px-7 py-10">
                <ReviewSection />
            </div>
            <div className="px-7 py-10">
                <VansSection />
            </div>
        </>
    )
}
