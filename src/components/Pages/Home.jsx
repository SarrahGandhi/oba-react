import react from "react"
import LandingPage from "../landing-page/landing-page"
import Products from "../products/products"
import ServicePage from "../Service-page/service-page"
import Clients from "../Clients/clients"
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