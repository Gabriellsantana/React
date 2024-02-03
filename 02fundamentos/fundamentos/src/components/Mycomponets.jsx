//hirearquia = pai App.jsx  > filho FirstComponets.jsx  > neto Mycomponets.jsx
// como eu inportoei Mycomponets dentro da minha pasta FirstComponets que ja esta inportada na pasta central e principal do projeto que é App.jsx  (My... se torna filho direto da Firs...)
// é possivel inport pasta dentro de pastas e pode ser inport6ada em mais de uma pasta então eu poderia ter minha pastas Mycompnts dentro de outras varias tmb

const Mycomponets = () =>{
    return(
        <div>
            <h1>Eu estou sendo Reaproveitado</h1>
        </div>
    )
}

export default Mycomponets;