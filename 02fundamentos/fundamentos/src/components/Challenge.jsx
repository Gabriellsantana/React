const Challenge = () => {
    const a = 5
    const b = 5
    const somar = () =>{
       const result = a+b;
       console.log(result);
       window.alert(result);
    }
    return(
        <div>
          <h5>Priemiro Número {a}</h5>
          <h5>Segundo Número {b}</h5>
          <div>
              <button onClick={somar}>Resultado</button>
          </div>
        </div>
    )
}

export default Challenge;