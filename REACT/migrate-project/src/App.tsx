import './assets/css/App.css'
import { Countries } from './pages/countries/Countries'
import { Session } from './pages/sesion/Session'
function App() {


  return (
    <>
      <h1>Countries App</h1>
      <Session />
      <Countries />
    </>
  )
}

export default App