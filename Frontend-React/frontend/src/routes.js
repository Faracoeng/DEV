//Necessário importar o React para trabalhar com jsx
import React from 'react';
// Importanto componentes do React
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Rota dos sensores
import Sensores from './paginas/Sensores';
import Capa from './paginas/Capa';
// Exportar um novo componente

// Comportamente padrão de rotas no React é permitir que mais
// de uma rota seja chamada ao mesmo tempo.
// o Swicth faz com que se limite a uma rota por vez

export default function Rotas(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Capa}/>
                <Route path="/sensores" component={Sensores}/>
            </Switch>
        </BrowserRouter>
    );
}