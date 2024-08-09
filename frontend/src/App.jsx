import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from './admin/pages/AdminDashboard';

import './App.css'

function App() {

  return (
    <>
         <BrowserRouter>
         <Routes>

         <Route path="/admindashboard" element={<AdminDashboard />} />

         </Routes>

         </BrowserRouter>

    </>
  )
}

export default App
