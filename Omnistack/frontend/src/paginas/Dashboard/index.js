// Criar um componente REACT vazio
//---------------------------------------
// Assim que usuário acessar a página, necessário carregar informações
// para isso utilizar {useEffect}
//---------------------------------------
//Como vao ser manipulados dados dentro do componente
// Necessario controlar ele pelo estado como explicado 
// na função login src/paginas/Login/index.js 

import React, {useEffect, useState} from 'react'; 
// React fornece um comonente chamado link, que serve para criar links que
// redirecionam para outra rota no site
import {Link} from 'react-router-dom';

//Imporar api
import api from '../../services/api';

//Importando o css da página
import './styles.css';


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
    // spot.preco ? `R$${spot.preco}  --> Isso é o mesmo que fazer um if no HTML React permite isso
    // Ou seja, se tiver preco, pega o preço do campo "spot.preco" senão escreve "Gratuito"
    //No botão do link, foi importada a classe "btn" estilizada no App.css
    return (
        <>
            <ul className="Listagem">
                {spots.map(spot => (
                    <li key={spot.id}>
                        <header style={{backgroundImage: `url(${spot.thumbnail_url})`}}/>
                        <strong> {spot.nomeEmpresa}</strong>
                        <span> {spot.preco ? `R$${spot.preco}/dia` : 'Gratuito'}</span>               

                    </li>
                ))}     
            </ul>
            <Link to="/criar">
                <button className="btn">Cadastrar novo spot</button>                    
            </Link>
        </>
    )

}