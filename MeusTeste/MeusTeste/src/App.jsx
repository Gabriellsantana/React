import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Paragrafo from './componets/Paragrafo'
  import Imagem from './assets/monalisa.webp'
import Funcão1 from './componets/hooks'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
          <h1>Minha página de testes</h1>
      </div>
          < Paragrafo/>
        <div>
              <img src={Imagem} alt="" />
        </div>
          < Funcão1 />

    </>
  );
}

export default App
