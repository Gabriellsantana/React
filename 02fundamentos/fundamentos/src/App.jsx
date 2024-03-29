import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//components
import FirstComponenr from './components/FirstComponets' //aqui eu inportei
import Paragrafo from './components/paragrafo'
import TemplatesExpressions from './components/TemplatesExpressions'
import Mycomponets from './components/Mycomponets'
import Eventos from './components/Events'
import Challenge from './components/Challenge'

//os componate deve com sempre a primeira letra Maiscula //
//<TemplatesExpressions/>
//<Mycomponets/>
//<Eventos/>
// <Challenge/>

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Fundamentos</h1>
      </div>
      <FirstComponenr/> 
      <Paragrafo/>
      <hr />
      <TemplatesExpressions/>
      <Mycomponets/>
       <Eventos/>
       <Challenge/>
    </>
  )
}

export default App
