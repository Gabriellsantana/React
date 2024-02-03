const Eventos = () =>{

    const enviar = () =>{
        window.alert("Evento Ativado");
    };

    return(
        <div>
            <div>
                 <button onClick={enviar}>Clique Aqui</button>
            </div>
        </div>
    )
};

export default Eventos;