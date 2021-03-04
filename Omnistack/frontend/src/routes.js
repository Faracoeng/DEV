// Declarar todas as rotas da aplicação

//Necessario importar o REAC para utilizar p jsx, componente HTML em JavaScript
import React from 'react';
// Importar componentes do React
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Importando as rotas das páginas
import Login from './paginas/Login';
import Dashboard from './paginas/Dashboard';
import Criar from './paginas/Criar';

// Exportando componente de rotas
// Switch serve para que apenas uma rota seja executada por vez,
// ja que por padrão o BrowserRouter permite que mais de uma
// SEja executada ao mesmo tempo

// Na rota do "/" é necessario utilizar a propriedade (exact)
// pois "/" esta em todas as outras rotas, e nesta especifica
// queremos que seja exatamente (exact) só e somente se for "/".
 
export default function ComponenteRotas() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/criar" component={Criar}/>
            </Switch>
        </BrowserRouter>
    )
}
