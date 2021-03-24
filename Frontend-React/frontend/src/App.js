import logo from './logo.svg';
import './App.css';

function App() {
  //Criando uma função em Javascript para solicitar a lista de sensores pro Node com metodo GET
  function listarSensores(event){
    console.log('lista de sensores exibida');
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="content">
        <p>
          Pressione o botão para exibir a <strong>Lista de sensores </strong> da estação.
        </p>
        <button className="btn" type="submit">Listar</button>
        </div>
        <noscript><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" > Learn React </a></noscript>

      </header>
    </div>
  );
}

export default App;
