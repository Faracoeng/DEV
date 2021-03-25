import React, {useEffect, useState} from 'react';
import api from '../../services/api';

//Assim que usuário for redirecionado pra cá, devera exibir a lista de sensores da EM

//UseEffect é uma função que recebe dois parâmetros, o primeiro é uma funçao 
// e o segundo é um array de dependencias, este array contem variáveis que ao 
// sofrerem alterações executará a função.
// sacaada: Se passar um array vazio a função será executada uma única vez
// Importante armazenar a listagem dos sensores dentro de um estado

export default function Sensores(){
    //Aqui estarei esperando uma lista vazia contendo os sensores do backend
    const [sensores, setSensores] = useState([]);

    useEffect(() => {

        async function carregarSensores(){
            const response = await api.get('/sensores');
            //console.log(response.data);
            setSensores(response.data);
        }
        carregarSensores();
    },[])

    return (
        <>
            <h1>Aqui será exibida a lista de sensores</h1>
            <ul className="listar-sensores">
                {sensores.map(sensor => (
                    <li key={sensor.id}>
                        <strong>{sensor.nomeSensor}</strong>
                    </li>
                ))}
            </ul>
        </>
    )
}