import React from 'react'

function CarDetails({brand , km , cor, newCar}) {
  return (
    <div>
        <h2>Detalhes Do Carro</h2>
         <ul>
            <li>Marca : {brand}</li>
            <li>Quilometragêm: {km}</li>
            <li>Cor : {cor}</li>
            {newCar && <p>Esse carro é novo!</p>} 
         </ul>
    </div>
  )
}

export default CarDetails