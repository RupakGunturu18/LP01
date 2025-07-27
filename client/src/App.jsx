import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Studio from './Studio/Studio'
import Photographer from './Photographer/Photographer'
import Printer from './Printer/Printer'
import Customer from './Customer/Customer'
import Landing from './Landing/Landing'
import OurPage from './Landing/OurStoriesSection'
import Footer from './Landing/Footer'


function App() {

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#18181b] to-[#09090b]">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/our" element={<OurPage />} />
        <Route path='/studio' element={<Studio />} />
        <Route path='/photographer' element={<Photographer />} />
        <Route path='/printer' element={<Printer />} />
        <Route path='/customer' element={<Customer />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
        {/* <Route path='/footer' element={<Footer />} /> */}
      </Routes>
    </div>
  )
}

export default App
