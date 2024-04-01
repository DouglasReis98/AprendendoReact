import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Product = () => {
    /* 4 - Rota dinâmica */
    const { id } = useParams()

    /* 5 - Carregamento dado individual */
    const url = 'http://localhost:3000/products/' + id;

    const { data: product, loading, error } = useFetch(url);

    console.log(product);

    return <>
        <div>Id do produto: {id}</div>
        {error && <p>Ocorreu um erro...</p>}
        {loading && <p>Carregando...</p>}
        {product && (
            <div>
                <h1>{product.id}</h1>
                <h1>R$ {product.price}</h1>
                {/* 6 - Nested Rules*/}
                <Link to={`/products/${product.id}/info`}>Mais informações</Link>
            </div>
        )}
    </>
}

export default Product