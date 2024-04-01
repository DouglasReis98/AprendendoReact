function UserDetails({nome, idade, profissao}) {

    return (
        <div>
            <h1>{nome}</h1>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
            <p>{idade >= 18 ? "Pode tirar carteira" : "Não pode tirar carteira"}</p>
        </div>
    )
}

export default UserDetails