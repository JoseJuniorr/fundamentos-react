import React from 'react'

import './App.css'

import Parametros from './components/Parametros'
import Comfilhos from './components/Comfilhos'
import Card from './layout/Card'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'

const App = () => {
    return (
        <div className="app">
            {/* <h1>React</h1>
            <h2>Exemplo de Componente React</h2>
            
             */}

            <Card title="Componente com params">
                <Parametros title="Título React test" subtitle="Subtitulo React test" />

            </Card>
            <Card title="Com filhos">
                <Comfilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </Comfilhos>
            </Card>
            <Card title="children">
                <Comfilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </Comfilhos>
            </Card>
            <Card >
                <Repeticao>

                </Repeticao>
            </Card>
            <Card >
                <Condicional numero={11}></Condicional>
            </Card>
        </div>



    )


}

export default App