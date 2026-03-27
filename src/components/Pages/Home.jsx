import react from "react"
import LandingPage from "../Home/landing-page/landing-page"
import Products from "../Home/products/products"
import ServicePage from "../Home/Service-page/service-page"
import Clients from "../Home/Clients/clients"
export default function Home() {
    return (
        <main className="home-container">
            <LandingPage />
            <Products />
            <ServicePage />
            <Clients />

        </main>
    );
}