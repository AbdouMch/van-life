import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Home from "@/components/Home"
import About from "@/components/About"
import Vans from "@/components/Vans"
import VanDetails from "@/components/VanDetails"

export default function App() {
    return (
        <BrowserRouter>
            <Header>
                <Link to="/vans" className="text-muted text-lg font-semibold no-underline">
                    Vans
                </Link>
                <Link to="/about" className="text-muted text-lg font-semibold no-underline">
                    About
                </Link>
            </Header>
            <main className="bg-cream flex flex-1 justify-center">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/vans" element={<Vans />} />
                    <Route path="/vans/:id" element={<VanDetails />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    )
}
