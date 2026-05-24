import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "@/pages/Home"
import About from "@/pages/About"
import Vans from "@/pages/Vans"
import VanDetails from "@/pages/VanDetails"
import Layout from "@/components/Layout"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="vans/:id" element={<VanDetails />} />
                    <Route path="vans" element={<Vans />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
