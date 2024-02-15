import {useState} from 'react'

const Condicional  = () => {
    const [x] = useState(true)

    const [name] = useState("João")

  return (
          <div><h1>Isso sera exebido?</h1>
           { x && <p> Agora o X é Vardadeiro!</p>}
           { !x && <p> Agora X é falso!</p>}
           { name === "João" ? (<div>
          <p>O nome é João</p>
        </div>) : (<div>
          <p>Nome não encontrado</p>
        </div>) }
    </div>
  )
}

export default Condicional;