import { useState } from 'react'

import Header from './components/header/header'
import './App.css'
import Footer from './components/footer/footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Pages/Home'
import Bearing from './components/Products/Bearings/Bearing'
import LinearAutomations from './components/Products/LinearAutomation/linearautomation'
import BearingDetail from './components/Products/Bearings/BearingDetail'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bearing" element={<Bearing />} />
          <Route path="/bearing/:id" element={<BearingDetail />} />
          <Route path="/linear-automation" element={<LinearAutomations />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
