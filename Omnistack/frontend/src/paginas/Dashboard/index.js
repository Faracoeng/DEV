// Criar um componente REACT vazio
//---------------------------------------
// Assim que usuário acessar a página, necessário carregar informações
// para isso utilizar {useEffect}
//---------------------------------------
//Como vao ser manipulados dados dentro do componente
// Necessario controlar ele pelo estado como explicado 
// na função login src/paginas/Login/index.js 

import React, {useEffect, useState} from 'react'; 
//Imporar api
import api from '../../services/api';

export default function Dashboard(){

    //Implementando estado do componente com uma lista vazia como parametro no useState
    const [spots, setSpots] = useState([])

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
    // Como vai retornar mais de um elemento
    //NECESSARIO UTILIZAR O FRAGMENTE (TAG VAZIA)
    return (
        <>
            <ul className="Listagem">
                {spots.map(spot => (
                    <li key={spot.id}>
                        <header />
                        <strong> {spot.nomeEmpresa}</strong>
                        <spam> {spot.preco}</spam>               

                    </li>
                ))}
            
            </ul>

        </>
    )

}