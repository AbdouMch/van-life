import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "@/context/AuthContext"

import Home from "@/pages/Home"
import About from "@/pages/About"
import MainLayout from "@/shared/components/MainLayout"

import Vans from "@/features/vans/pages/Vans"
import VanDetails from "@/features/vans/pages/VanDetails"

import HostLayout from "@/features/host/components/HostLayout"
import HostVanDetailsLayout from "@/features/host/components/HostVanDetailsLayout"
import Dashboard from "@/features/host/pages/Dashboard"
import Income from "@/features/host/pages/Income"
import Reviews from "@/features/host/pages/Reviews"
import HostVans from "@/features/host/pages/HostVans"
import HostVanInfo from "./features/host/pages/HostVanInfo"
import HostVanPricing from "@/features/host/pages/HostVanPricing"
import HostVanPhotos from "@/features/host/pages/HostVanPhotos"

export default function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="vans" element={<Vans />} />
                        <Route path="vans/:id" element={<VanDetails />} />

                        <Route path="host" element={<HostLayout />}>
                            <Route index element={<Dashboard />} />
                            <Route path="income" element={<Income />} />
                            <Route path="reviews" element={<Reviews />} />
                            <Route path="vans" element={<HostVans />} />

                            <Route path="vans/:id" element={<HostVanDetailsLayout />}>
                                <Route index element={<HostVanInfo />} />
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
