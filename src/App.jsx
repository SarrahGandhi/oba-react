import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from './components/header/header'
import LandingPage from './components/landing-page/landing-page'
import './App.css'
import Products from './components/products/products'
import ServicesPage from './components/Service-page/service-page'
import Client from './components/Clients/clients'
import Footer from './components/footer/footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
