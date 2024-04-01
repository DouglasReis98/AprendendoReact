function Challenge() {
    
    let n1 = 5;
    let n2 = 15;

    return <div>
                <p>Número 1: {n1}</p>
                <p>Número 2: {n2}</p>
                <button onClick={() => console.log(n1 + n2)}>Clique aqui para ver a soma de {n1} + {n2}</button>
                
            </div>
}

export default Challenge