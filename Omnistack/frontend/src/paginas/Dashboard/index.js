// Criar um componente REACT vazio
// Assim que usuário acessar a página, necessário carregar informações
// para isso utilizar {useEffect}
import React, {useEffect} from 'react'; 
//Iporar api
import api from '../../services/api';

export default function Dashboard(){

    useEffect(() => {
        async function carregarListagem(){
            //pegar id do usuario do bcd do navegador
            const idUsuario = localStorage.getItem('user');
            // Fazendo um get pra pegar a listagem de spots dessa rota,
            //e filtrar o id do usuário que se deseja carregar a listagem,
            // enviando como cabeçalho seu id salvo no  navegador
            const resposta = await api.get('/dashboard',{
                headers: {idUsuario}
            });
            console.log(resposta.data); 
        }
        carregarListagem();
    },[]);

    return <h1>Dashboard</h1>
}