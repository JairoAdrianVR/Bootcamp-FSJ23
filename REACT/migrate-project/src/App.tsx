import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './assets/css/App.css'
import { Countries } from './pages/countries/Countries'
import { Session } from './pages/sesion/Session'
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/session' element={<Session />} />
          <Route path='/' element={<Countries />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App