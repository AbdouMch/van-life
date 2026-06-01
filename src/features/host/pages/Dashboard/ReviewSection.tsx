import { Star } from "lucide-react"
import { Link } from "react-router-dom"

export default function ReviewSection() {
    const reviewScore = 4.5

    return (
        <>
            <h2 className="flex items-center gap-2 text-2xl font-bold">
                <span>Review score</span>
                <Star className="fill-brand text-brand inline-block h-6 w-6" />
                <span>{reviewScore}</span>
                <span className="text-xl font-medium">/5</span>
            </h2>
            <Link to="/host/reviews" className="text-black hover:underline">
                Details
            </Link>
        </>
    )
}
