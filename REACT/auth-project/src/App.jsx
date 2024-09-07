import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { Session } from './pages/sesion/Session'


function App() {

  return (
    <>
    {/* BrowserRouter -> Activando la funcionalidad de Enrutamiento*/}
      <BrowserRouter>
          {/* Routes -> Definir rutas */}
          <Routes>
            {/* Route -> Generamos todas las rutas que necesitemos */ }
            <Route  path='/' element={<Home />}/>
            <Route  path='/home' element={<Home />}/>
            <Route  path='/session' element={<Session />}/>
            
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
