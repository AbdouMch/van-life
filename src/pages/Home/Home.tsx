import heroImg from "@/assets/images/home-hero.png"
import { Link } from "react-router-dom"
import { cn } from "@/shared/lib/cn"

export default function Home() {
    return (
        <div
            className="bg-cover bg-center bg-no-repeat px-8 pt-10 md:pt-40"
            style={{ backgroundImage: `url(${heroImg})` }}
        >
            <h1 className="text-left text-[2.5rem] font-extrabold text-white">
                You got the travel plans, we got the travel vans.
            </h1>
            <p className="text-left text-[1.5rem] font-medium text-white">
                Add adventure to your life by joining the #vanlife movement. Rent the perfect van to
                make your perfect road trip.
            </p>
            <div className="flex justify-center">
                <Link
                    to="/vans"
                    className={cn(
                        "mt-12 inline-block content-center rounded px-10 py-3 text-center md:px-40",
                        "font-semibold text-white",
                        "bg-brand hover:bg-brand-hover",
                    )}
                >
                    Explore our vans
                </Link>
            </div>
        </div>
    )
}
