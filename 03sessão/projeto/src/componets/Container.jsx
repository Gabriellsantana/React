const Container = ({children, myValue}) => {
    return(
       <div>
        <h2>Esse é titulo do Nosso Conatiner</h2>
         {children} {/* dessa maneira consegue abraça conteudo com nosso componante escrever direto nele */}
         <p>O valor é: {myValue}</p>
       </div>
    )
}

export default Container