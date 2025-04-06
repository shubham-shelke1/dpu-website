import { useState } from 'react'
import './index.css'

import { Routes, Route } from 'react-router-dom'
import Navbar from './component/navbar/Navbar'
import AboutusPages from './pages/AboutusPages'
import AdmissionPages from './pages/AdmissionPages'
import CulturalPages from './pages/CulturalPages'
import EventsPages from './pages/EventsPages'
import IqacPages from './pages/IqacPages'
import LibraryPages from './pages/LibraryPages'
import TrainingAndPlacementsPages from './pages/TrainingAndPlacementsPages'
import HomePages from './pages/HomePages'
import Header from './component/header/Header'
import MandatiyPages from './pages/MandatiyPages'
import ScholrPages from './pages/ScholrPages'
import ArtsPages from './pages/ArtsPages'

import Footer from './component/footer/Footer'
import InternshipPages from './pages/InternshipPages'
import GallaryPages from './pages/GallaryPages'
import Form from './component/form/Form'
import Count from './component/count/Count'




// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Navbar />

      <Routes>

        <Route path="/aboutus" element={<AboutusPages />} />
        <Route path="/admission" element={<AdmissionPages />} />
        <Route path="/cultural" element={<CulturalPages />} />
        <Route path="/events" element={<EventsPages />} />
        <Route path="/" element={<HomePages />} />
        <Route path="/iqac" elementl={<IqacPages />} />
        <Route path="/library" element={<LibraryPages />} />
        {/* <Route path="/studentcorner"  element={<StudentcornerPages />}  /> */}
        <Route path="/trainingandplacement" element={<TrainingAndPlacementsPages />} />
        <Route path="/mandatiy" element={<MandatiyPages />} />
        <Route path="/scholr" element={<ScholrPages />} />


        <Route path="informationbrouch" element={<MandatiyPages />} />
        <Route path="arts" element={<ArtsPages />} />
        <Route path="internship" element={<InternshipPages/>} />
        <Route path="gallary" element={<GallaryPages/>} />
        <Route path="/form" element={<Form />} />
                <Route path="/count" element={<Count/>} />

        










      </Routes>

      <Footer />  


    </>
  )
}

export default App
