import { useState } from 'react'

import Header from './components/header/header'
import './App.css'
import Footer from './components/footer/footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Pages/Home'
import Bearing from './components/Products/Bearings/Bearing'
import LinearAutomations from './components/Products/LinearAutomation/linearautomation'
import BearingDetail from './components/Products/Bearings/BearingDetail'
import AboutUs from './components/AboutUs/aboutus'
import ServicesPage from './components/ServicesPage/servicepage'
import ProductsPage from './components/Pages/ProductsPage'
import EnquiryPage from './components/EnquiryPage/enquirypage'
import PowerTransmission from './components/Products/PowerTransmission/powertransmission'
import Accessories from './components/Products/Accessories/accessories'
import LinearAutomationDetail from './components/Products/LinearAutomation/linearautomationdetail'
import PowerTransmissionDetail from './components/Products/PowerTransmission/powertransmissiondetail'
import AccessoriesDetail from './components/Products/Accessories/accessoriesdetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bearing" element={<Bearing />} />
          <Route path="/power-transmission" element={<PowerTransmission />} />
          <Route path="/power-transmission/:id" element={<PowerTransmissionDetail />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/accessories/:id" element={<AccessoriesDetail />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/enquiry" element={<EnquiryPage />} />
          <Route path="/bearing/:id" element={<BearingDetail />} />
          <Route path="/linear-automation" element={<LinearAutomations />} />
          <Route path="/linear-automation/:id" element={<LinearAutomationDetail />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
