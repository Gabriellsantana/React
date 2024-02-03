// o evento no button "salvar" é como se fosse de forma mais direta igual estilizar a tag no proprio html

const Eventos = () =>{
    const enviar = () =>{
        window.alert("Evento Ativado");
    };
    return(
        <div>
            <div>
                 <button onClick={enviar}>Clique Aqui</button>
            </div>
            <br />
            <div>
                <button onClick={() => window.alert("clicou em salvar")}>Salvar</button>
            </div>
        </div>
    )
};

export default Eventos;