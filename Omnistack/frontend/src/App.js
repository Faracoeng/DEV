import React from 'react'; //SEmpre tem que importar React
import './App.css'; // Impota um arq.cc e automaticamente integra CSS com HTML


// Componente é uma função em JS que retorna um HTML

// Este componente se chama APP() que é importado em index.js
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
