import { createContext, useState, useEffect } from 'react'
import LaborCards from './components/LaborCards'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import NewEmployee from './components/NewEmployee'
import Error from './pages/Error'
import Login from './pages/Login';
import Signup from './pages/Signup'

const Appstate = createContext();


const App = () => {

  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("")

  return (

    <Appstate.Provider value={{login, userName, setLogin, setUserName }} >

    <div className='relative' >
      <Navbar />
      <Routes>
        <Route path='/' element={<LaborCards />} />
        <Route path='/newemployee' element={ <NewEmployee /> } />
        <Route />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>

    </Appstate.Provider>
  )
}

export default App;
export {Appstate};