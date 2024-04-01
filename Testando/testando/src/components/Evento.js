import Button from "./evento/Button";

function Evento() {

    function meuEvento() {
        console.log(`Ativando Primeiro Evento`);
    }

    function segundoEvento() {
        console.log(`Ativando Segundo Evento`);
    }
    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento" />
            <Button event={() => console.log("Arrow Function funcionando!")} text="Testando Arrow Function"/>
        </div>
    );
}

export default Evento