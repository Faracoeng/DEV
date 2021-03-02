import React from 'react'; //SEmpre tem que importar React
import './App.css'; // Impota um arq.cc e automaticamente integra CSS com HTML

// Importando a logo
import logo from './assets/logo.svg';


// Componente é uma função em JS que retorna um HTML

// Este componente se chama APP() que é importado em index.js
function App() {
  return (
    // Uma caixinha na tela, escrita em HTML dentro do códifgo em JavaScript
    // isso é possivel graças ao React, porém, as funções em HTML mudam, pois o 
    // JavaScript possui palavras reservadas, observamos abaixo as alterações em 
    // "for" para "htmlFor" ou "class" para className

    <div className="container">
        <img src={logo} alt="Valhalla"/>

        <div className="content">
          <p>
            Aqui <strong>escrevo</strong> o que eu quiser.
          </p>  
          <form>
            <label htmlFor="email">E-MAIL *</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Digite seu email"
            /> 
            
            <button className="btn" type="submit">Entrar</button>
          </form>  
        </div>
    </div>
  );
}

export default App;
