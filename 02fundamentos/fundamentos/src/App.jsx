import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//components
import FirstComponenr from './components/FirstComponets' //aqui eu inportei
import Paragrafo from './components/paragrafo'
import TemplatesExpressions from './components/TemplatesExpressions'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Fundamentos</h1>
      </div>
      <FirstComponenr/> 
      <Paragrafo/>
      <TemplatesExpressions/>
    </>
  )
}

export default App
