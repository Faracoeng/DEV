// React é biblioteca para construção de interface em geral
import React from 'react';
//Que pode ser integrda com as partes, neste caso com aplicação WEB,
// mas poderia ser ReactNative, pra mobile, entre outras
import ReactDOM from 'react-dom';
// Aqui o componente APP esta sendo importado 
import App from './App';
// através do ReactDOM é possivel jogar o componente para a página WEB, 
// O componente App vira uma tag HTML

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



