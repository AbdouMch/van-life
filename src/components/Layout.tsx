import { Outlet } from "react-router-dom"

import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Layout() {
    return (
        <>
            <Header />
            <main className="bg-cream flex flex-1 justify-center">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
