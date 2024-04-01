import styles from '../components/CarroDetalhes.module.css'

function CarroDetalhes({marca, modelo, cor}) {

    return (
        <div>
            <h1>{modelo}</h1>
            <p>Marca: {marca}</p>
            <p>Cor: {cor}</p>
        </div>
    )
}

export default CarroDetalhes