import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "@/context/AuthContext"

import Home from "@/pages/Home"
import About from "@/pages/About"
import Vans from "@/pages/Vans"
import VanDetails from "@/pages/VanDetails"
import MainLayout from "@/components/MainLayout"
import HostLayout from "@/components/HostLayout"
import Dashboard from "@/pages/Host/Dashboard"
import Income from "@/pages/Host/Income"
import Reviews from "@/pages/Host/Reviews"
import HostVans from "@/pages/Host/HostVans"
import HostVanDetail from "@/pages/Host/HostVanDetail"
import HostVanDetailsLayout from "@/components/Host/HostVanDetailsLayout"
import HostVanPricing from "@/pages/Host/HostVanPricing"
import HostVanPhotos from "@/pages/Host/HostVanPhotos"

export default function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="vans/:id" element={<VanDetails />} />
                        <Route path="vans" element={<Vans />} />

                        <Route path="host" element={<HostLayout />}>
                            <Route index element={<Dashboard />} />
                            <Route path="income" element={<Income />} />
                            <Route path="reviews" element={<Reviews />} />
                            <Route path="vans" element={<HostVans />} />

                            <Route path="vans/:id" element={<HostVanDetailsLayout />}>
                                <Route index element={<HostVanDetail />} />
                                <Route path="pricing" element={<HostVanPricing />} />
                                <Route path="photos" element={<HostVanPhotos />} />
                            </Route>
                        </Route>
                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}
