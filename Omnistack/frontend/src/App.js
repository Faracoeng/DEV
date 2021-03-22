// Toda infomação que é manipulada em um componente é mantida no ESTADO do componente
// Conceito importante lembrar
// Importar junto com o React o useState Que vai ser responsável por criar ESTADOS dentro d aplicação

import React from 'react'; //Sempre tem que importar React

//Importar a api criada dentro de src/services/api.js
import api from './services/api';
import './App.css'; // Impota um arq.cc e automaticamente integra CSS com HTML

// Importando a logo
import logo from './assets/logo.svg';


//Importando componente de rotas
// Esse componente deve ir dentro de "content" 
// no "return" da função "App"
import ComponenteRotas from './routes';


// Componente é uma função em JS que retorna um HTML

// Este componente se chama APP() que é importado em index.js

function App() {

  return (
    // Uma caixinha na tela, escrita em HTML dentro do códifgo em JavaScript
    // isso é possivel graças ao React, porém, as funções em HTML mudam, pois o 
    // JavaScript possui palavras reservadas, observamos abaixo as alterações em 
    // "for" para "htmlFor" ou "class" para className

    // IMPORTANTE!!
    //Quando o usuário clicar no botão para fazer o login
    // Deve-se encaminhar os dados do input aqui embaixo no HTML para a api, por la,
    // Sera encaminhado pela rora POST criada no backend e deverá retornar 
    // o id do usuário para ser armazenado no frontend

    <div className="container">
        <img src={logo} alt="Valhalla"/>

        <div className="content">
          <ComponenteRotas />

        </div>
    </div>
  );
}

export default App;
