import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SideBar from './component/SideBar'
import NavBar from './component/NavBar'
import Home from './component/Home'
import VideoGenerator from './component/VideoGeneratorTable'
import Layout from './component/Layout'
import SubscriptionPlan from './component/SubscriptionPlan'


function App() {
  const Sub = () => <h1>SUb</h1>;

  return (
    <Routes>

      <Route element={<Layout />} >
        <Route path="/" element={<Home />} />
        <Route path="/videogenerator" element={<VideoGenerator />} />
        <Route path="/subcriptionPlan" element={<SubscriptionPlan />} />
        <Route path="/vidifyhome" element={<home />} />
      </Route>
    </Routes>
  )
}

export default App