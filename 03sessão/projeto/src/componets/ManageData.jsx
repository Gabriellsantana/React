//rafc importação da base da função mesma mcoisa do "!" no html

import { useState } from "react";

export const Function1 = () => {
    let someData =10; 
 
  const [number, setNumber] = useState (10);
  return (
    <div>
        <div>
            <p>valor:{someData}</p>
            <button onClick={() => (someData = 15)}>Mudar Variavel</button>
        </div>
         <div>
              <p>Valor: {number}</p>
              <button onClick={ () => setNumber (25)}>Mudar o State</button>
         </div>
    </div>
  )
}

export default Function1 