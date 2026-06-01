import { Link } from "react-router-dom"
import { formatCurrency } from "@/shared/lib/format"

export default function IncomeSection() {
    const totalIncome = 2260

    return (
        <>
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
        </>
    )
}
