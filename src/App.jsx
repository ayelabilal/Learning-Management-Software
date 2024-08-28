
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Screens/Login'
import Signup from './Screens/Signup'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
     </Routes>
    </>
  )
}

export default App
