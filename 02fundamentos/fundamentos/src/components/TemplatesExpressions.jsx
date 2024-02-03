const TemplatesExpressions = () =>{

      const name = "Gabriel Santana";
        const  date = {
          job:"Programado Senior",
          idade:23,
        };
     
    return(
        <div>
             <h1>Óla {name} tudo bem?</h1>
             <h4>Cargo atual {date.job} </h4>
             <p>Sua idade é {date.idade} </p>
        </div>
    )
}

export default TemplatesExpressions