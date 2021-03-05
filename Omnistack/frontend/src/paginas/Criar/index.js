// Criar um componente REACT vazio
import React, {useState} from 'react'; 

export default function Criar(){
    // Sempre analisando alterações de estado no componente e atualizando informações
    const [nomeEmpresa, setNomeEmpresa] = useState('');
    const [tecnologias, setTecnologias] = useState('');
    const [preco, setPreco] = useState('');

    function handleSubmit(){
    // Sempre fazer assim com um input no React por conta da funcionalidade de "Estado"
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="nomeEmpresa">EMPRESA*</label>
            <input
                id="nomeEmpresa"
                placeholder="Sua empresa incrível"
                value={nomeEmpresa}
                onChange={event => setNomeEmpresa(event.target.value)}
            />
            
            <label htmlFor="tecnologias">TECNOLOGIAS*<span>(Separadas por vírgula)</span></label>
            <input
                id="tecnologias"
                placeholder="Quais tecnologias (strings no backend)"
                value={vetorDeStrings}
                onChange={event => setTecnologias(event.target.value)}
            />

            <label htmlFor="preco">VALOR DA DIÁRIA*<span>(Em branco para GRATUITO)</span></label>
            <input
                id="preco"
                placeholder="Valor cobrado"
                value={preco}
                onChange={event => setPreco(event.target.value)}
            />

            <button type="submit" className="btn">Cadastrar</button>
        </form>
    )
    }
}