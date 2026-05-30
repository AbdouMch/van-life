import aboutImg from "@/assets/images/about-hero.png"
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="about-container bg-cream max-w-full">
            <img src={aboutImg} alt="about image" className="w-full" />
            <div className="about-content mt-5 mb-10 px-8">
                <h1 className="text-left text-[2.5rem] font-extrabold text-black">
                    Don’t squeeze in a sedan when you could relax in a van.
                </h1>
                <p className="text-left text-[1.5rem] font-medium text-black">
                    Our mission is to enliven your road trip with the perfect travel van rental. Our
                    vans are recertified before each trip to ensure your travel plans can go off
                    without a hitch.
                    <br />
                    (Hitch costs extra 😉)
                </p>
                <p className="text-left text-[1.5rem] font-medium text-black">
                    Our team is full of vanlife enthusiasts who know firsthand the magic of touring
                    the world on 4 wheels.
                </p>
                <div className="explore-vans bg-brand-light mt-12 rounded-md px-12 py-16">
                    <p className={"text-left text-[1.5rem] font-medium text-black"}>
                        Your destination is waiting.
                        <br />
                        Your van is ready.
                    </p>

                    <div className="mt-6">
                        <Link
                            to="/vans"
                            className="hover:bg-brand-hover place-content-center rounded-xl bg-black px-5 py-3 text-center font-semibold text-white"
                        >
                            Explore our vans
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
