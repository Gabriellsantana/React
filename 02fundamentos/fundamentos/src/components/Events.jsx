// o evento no button "salvar" é como se fosse de forma mais direta igual estilizar a tag no proprio html

const Eventos = () =>{
    const enviar = () =>{
        window.alert("Evento Ativado");
    };
  const rederizando = (x) =>{ //functin com condição
    if(x) {
        return <h2>Renderizando isso!</h2>
    } else{
        return <h3>Também posso renderizar isso!</h3>
    }
  }
    return(
        <div>
            <div>
                 <button onClick={enviar}>Clique Aqui</button>
            </div>
            <br />
            <div>
                <button onClick={() => window.alert("clicou em salvar")}>Salvar</button>
            </div>
            {rederizando(true)}
            {rederizando(false)}
        </div>
    )
};

export default Eventos;