import React from 'react'
import LaborCards from './components/LaborCards'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import NewEmployee from './components/NewEmployee'

const App = () => {
  return (
    <div >

      <Navbar />
      <Routes>
        <Route path='/' element={<LaborCards />} />
        <Route path='/newemployee' element={ <NewEmployee /> } />
      </Routes>
    </div>
  )
}

export default App