import React from 'react'
import { useState } from 'react';

export const Funcão1 = () => {
    let [n3, n2] = useState (20)
  return (
    <div><h1>Hooks</h1>
        <div>
            <p>Numero:{n3}</p>
            <button onClick={() => n2(25)}>Alterar</button>
        </div>
    </div>

  )
}

export default Funcão1;
