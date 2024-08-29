import './assets/css/App.css'
import { Countries } from './countries/Countries'

/*  NOMENCLATURA
  - Variables y Estados -> camelCase
  - Funciones -> UpperCamelCase
  - Constantes y Variables de entorno -> UPPERCASE
  - Carpetas -> lowercase
  - Componentes -> UpperCamelCase

  * Estructuracion Modular
  //npm run dev
*/
function App() {

  return (
    <>
      <h1>Hola FSJ23</h1>
      <Countries />
    </>
  )
}

export default App
