import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
/*diferença entre acessa as imagens pela as duas pasta são na public é mais indicado caso vc compreenda que não havera mudança na quela img a assets você alterar a img na pastas e ele é altera no componente */ 
import Monalisa from "./assets/monalisa.webp"; //aqui vc inporta como se fosse um componente OBS:sempre letra MAISCULA o nome do componmente
import Function1 from './componets/ManageData';
import ListsRender from './componets/ListsRender';
import Condicional from './componets/Condicional';
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
           <h1>Avançando em React</h1>
      </div> 
       {/*imagem em public - acessa pela '/' */}
        <div>
          <h3>img pela pastas public</h3>
            <img src="/monalisa.webp" alt="" />
        </div>
         {/*imagem em assets - acessa pela '/' */}
          <div>
            <h3>img pela pastas assets</h3>
              <img src= {Monalisa} alt="" />
          </div>
             <Function1/>
             <ListsRender />
             <Condicional />
    </>
  )
}

export default App
