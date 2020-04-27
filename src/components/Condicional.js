import React from 'react'

import If from '../If'

export default props => {
    return (
        <div>
            <h2>O número {props.numero} é</h2>

            {props.numero % 2 == 0 ?
                <h2>Par</h2> :
                <h2>Impar</h2>
            }

        </div>

    )
}