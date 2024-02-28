import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
/*diferença entre acessa as imagens pela as duas pasta são na public é mais indicado caso vc compreenda que não havera mudança na quela img a assets você alterar a img na pastas e ele é altera no componente */ 
import Monalisa from "./assets/monalisa.webp"; //aqui vc inporta como se fosse um componente OBS:sempre letra MAISCULA o nome do componmente
import Function1 from './componets/ManageData';
import ListsRender from './componets/ListsRender';
import Condicional from './componets/Condicional';
import ShowUserName from './componets/ShowUserName';
import CarDetails from './componets/CarDetails';
import Fragments from './componets/Fragments';
import Container from './componets/Container';
 
function App() {
  const [count, setCount] = useState(0)

    const cars =[
      {id:1 ,brand:'Renault', color:'branco',newCar:true, km: 566 },
      {id:2 ,brand:'Ford', color:'Verde',newCar:true, km: 1234 },
      {id:3 ,brand:'BMX', color:'Azul',newCar:true, km: 9876 }
    ]

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

             {/*priemira forma de proops*/}
             <ShowUserName name = "Gabriel"/>

               {/*segunda forma de Destructuring em props*/}
             <CarDetails brand="Ferrari" cor="Vermelha" km={200} />
              
               {/*reaproveitando*/}
             <CarDetails brand="Bugatti" cor="Azul" km={300} newCar={true}  />
             <CarDetails brand="Merecds" cor="Amarelo" km={400} newCar={false} />

             {/*loop com array de objetos*/}
             {cars.map((car)=>(
                 <CarDetails brand={car.brand} cor={car.color} km={car.km} newCar={car.newCar} />
             ))}
               {/*fragmento*/}
               <Fragments/>

              {/*container tem sert feito igual as tag html com abertura e fechamento*/} 
              <Container myValue={"testing"}>
                 <p>escrevendo dentro do conatiner atraves da propria pasta App.jsx</p>
              </Container>
               
    </>
  )
}

export default App
