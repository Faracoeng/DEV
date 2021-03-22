import logo from './logo.svg';
import './App.css';

function App() {
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
