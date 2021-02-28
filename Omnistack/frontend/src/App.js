import React from 'react'; //SEmpre tem que importar React
import './App.css'; // Impota um arq.cc e automaticamente integra CSS com HTML

// Importando a logo
import logo from './assets/logo.svg';


// Componente é uma função em JS que retorna um HTML

// Este componente se chama APP() que é importado em index.js
function App() {
  return (
    <div className="container">
        <img src={logo} alt="Valhalla"/>

        
    </div>
  );
}

export default App;
