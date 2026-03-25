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


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <LandingPage />
      <Products />
      <ServicesPage />
      <Client />
    </>
  )
}

export default App
