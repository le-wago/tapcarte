import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Navbar } from './navbar/Navbar'
import { Accueil } from './accueil/Accueil'
import { Form } from './formulaire/Form'
function App() {

  return (
    <>
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route path="/" element={<Form/>}></Route>
          <Route path="/home" element={<Accueil/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
