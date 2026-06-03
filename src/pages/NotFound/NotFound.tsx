import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div className="flex w-full flex-col items-center px-8 py-10">
            <h1 className="text-2xl font-bold">
                Sorry, the page you were looking for was not found.
            </h1>
            <Link to="/" className="mt-5 rounded-md bg-black px-8 py-2 text-white md:px-40">
                Return to Home
            </Link>
        </div>
    )
}
