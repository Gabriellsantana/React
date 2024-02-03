const TemplatesExpressions = () =>{

     const name = "Gabriel Santana" 
     const date = (  //essa sitaxizecm se fosse um fuction e para declarar mais de uma variavel precisa de "," vigular
        idade = 20,
        job = "Programado Senior"
     )
     
    return(
        <div>
             <h1>Óla {name} tudo bem?</h1>
             <h3>Voçê é um {date.job}</h3> 
        </div>
    )
}

export default TemplatesExpressions