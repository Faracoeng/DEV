// Criar um componente REACT vazio
import React, {useState} from 'react'; 

//Importar a api criada dentro de src/services/api.js
import api from '../../services/api';

//Criar uma tag vazia em volta dos componentes (fragment) criados no jsx:
//<>
//  componentes
//</>
export default function Login(){
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
        <>
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
        </>  
    )
}