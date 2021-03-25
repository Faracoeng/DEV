import logo from './logo.svg';
import './App.css';

//Importando arquivos de rotas
import Routes from './routes';


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
          <Routes />

        </div>
        <noscript><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" > Learn React </a></noscript>

      </header>
    </div>
  );
}

export default App;
