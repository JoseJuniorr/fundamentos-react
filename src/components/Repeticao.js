import React from 'react'

import Produtos from '../data/Produtos'

export default props => {
    function getProdutos() {
        return Produtos.map(prod => {
            return <li key={prod.id}>{prod.id} - {prod.name} -> R$ {prod.price}</li>
        })
    }



    return (
        <div>
            <h2>Repetição</h2>
            <ul>{getProdutos()}</ul>
        </div>

    )

}
