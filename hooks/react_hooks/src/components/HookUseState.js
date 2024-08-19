import React, { useState } from 'react'

const HookUseState = () => {
    // 1 - useState
    let userName = "João"

    const [name, setName] = useState("Douglas");

    const changeNames = () => {

        userName = "João Souza";

        setName("Douglas Reis");
        console.log(userName)

    }
    console.log(name)

    // 2 - useState e input
    const [age, setAge] = useState(18)

    const handleSubmit = (e) => {
        e.preventDefault();

        // envio a uma API (sqn!)
        console.log(age)
    }

    return (
        <div>
            {/* 1 - useState */}
            <h2>useState</h2>
            <p>Variavel: {userName}</p>
            <p>useState: {name}</p>
            <button onClick={changeNames}>Mudar Nomes</button>
            {/* 2 - useState e inputs */}
            <p>Digite a sua idade!</p>
            <form  onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <input type="submit" value="Enviar" />
            </form>
            <p>Você tem {age} anos!</p>
        </div>
    )
}

export default HookUseState