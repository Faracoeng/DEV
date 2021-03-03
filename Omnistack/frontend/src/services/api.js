import axios from 'axios';

const api = axios.create({
    //URL que se repete em toda requisição
     baseURL: 'http://localhost:3334',
});

//Exporta a api
export default api;