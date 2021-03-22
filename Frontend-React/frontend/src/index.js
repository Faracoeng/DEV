import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//Importanto o componente APP()
import App from './App';
import reportWebVitals from './reportWebVitals';

//Essa função Permite colocar componentes na página desejada.
//Neste caso, dentro de public temos index.html, que será a capa do projeto,
//o conteúdo html de la esta importando 'root' atraves do comando <div id="root"></div>
//que por sua vez esta sendo renderizado pela função abaixo, ou seja esta tranformando uma 
// função de javascript em uma tag, tanto que se colocar um conteúdo em HTML no primeiro parámetro 
// da função abaixo funcionará também, exemplo:
//ReactDOM.render(<h2>Uma frase qualquer em HTML</h2>,  document.getElementById('idDaTag'));
// ESta frase vai aparecer na tag que indicar <div id="idDaTag"></div>

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
