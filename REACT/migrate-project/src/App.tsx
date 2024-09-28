import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './assets/css/App.css'
import { Countries } from './pages/countries/Countries'
import { Session } from './pages/sesion/Session'
import { UserProvider } from './context/UserDataContext'
import { ProtectedRoute } from './components/ProtectedRoute'
function App() {


  return (
    <>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/session' element={<Session /> } />
          <Route path='/' element={<ProtectedRoute><Countries /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
      </UserProvider>
    </>
  )
}

export default App