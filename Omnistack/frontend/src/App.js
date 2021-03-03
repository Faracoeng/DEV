// Toda infomação que é manipulada em um componente é mantida no ESTADO do componente
// Conceito importante
// Importar junto com o React o useState Que vai ser responsável por criar ESTADOS dentro d aplicação

import React, {useState} from 'react'; //Sempre tem que importar React

//Importar a api criada dentro de src/services/api.js
import api from './services/api';
import './App.css'; // Impota um arq.cc e automaticamente integra CSS com HTML

// Importando a logo
import logo from './assets/logo.svg';


// Componente é uma função em JS que retorna um HTML

// Este componente se chama APP() que é importado em index.js

function App() {
  // useState retorna duas funções 'email' e 'setEmail'
  // Função funciona em tempo real, email contem o conteudo
  // dentro de "useState('')", toda a vez que a informação for atualizada
  // "email" vai estar atualizado, quem atualiza é "setEmail"

  const [email, setEmail] = useState('');

  // Criando uma função dentro de outra
  // hundleSubmit sera enviada como valor
  // dentro de "form onSubmit" no HTML abaixo

  // OBS: Para inbutir funções JavaScript no código HTML
  // é necessario utilizar chaves:
  // "form onSubmit = {hundleSubmit}"

  // Necessario tornar a funcao assincrona para receber o id do usuario que foi registrado no BCD
  async function hundleSubmit (evento){
    //console.log('Apareceu no inspecionar(F12) do navegador?');
    evento.preventDefault(); // Para não recarregar a tela quando clicar no botão
    //console.log(email);
    const resposta = await api.post('/sessions',{
      email: email
    }); // Possui os metodos que se deseja utilizar no backend
    console.log(resposta);

    // Dentro de resposta, no campo "data" vem o id do usuário na requisição
    //Para pegar o id:
    const idUsusario = resposta.data.id; // OU const {id} = resposta.data;
    // Este id é utilizado para autenticar o usuário, necessario armazenar
    // em um local onde toda a aplicação tenha conhecimento da existencia
    //Armazenar em : "localStorage" que é um bcd dentro do navegador
    console.log(idUsusario);
    localStorage.setItem('user',idUsusario); // Agora esta salvo no navegador


  }
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
          <p>
            Aqui <strong>escrevo</strong> o que eu quiser.
          </p>  
          <form onSubmit = {hundleSubmit}>
            <label htmlFor="email">E-MAIL *</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Digite seu email"
              value={email}
              onChange ={evento => setEmail(evento.target.value)}
            /> 
            
            <button className="btn" type="submit">Entrar</button>
          </form>  
        </div>
    </div>
  );
}

export default App;
