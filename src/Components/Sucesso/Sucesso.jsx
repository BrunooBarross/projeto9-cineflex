import { Link } from "react-router-dom";
import { useEffect } from 'react';

import "./style.css"

const Sucesso = (props) => {
    const {setBotaoH} = props; 
    useEffect(_=>{
        setBotaoH(false);
    }, [setBotaoH]);

    const {assentos, nomeFilme, dataFilme, horaFilme, nome, cpf} = props.sucesso;
    assentos.sort((a, b) => a-b);
    const formatCpf = cpf.substr(0, 3)+'.'+cpf.substr(3, 3)+'.'+cpf.substr(6, 3)+'-'
         +cpf.substr(9, 2);

    return(
        <section className="container-sucesso">  
            <div className="mensagem">
                <span>Pedido feito</span>
                <span>com sucesso!</span>
            </div>
            <div className="sucesso-info">
                <h2>Filme e sessão</h2>
                <span>{nomeFilme}</span>
                <span>{dataFilme} {horaFilme}</span>
            </div>
            <div className="sucesso-info">
                <h2>Ingressos</h2>
                {assentos.map((assento, key) =>(
                    <span key={key}>Assento: {assento}</span>)
                )}  
            </div>
            <div className="sucesso-info">
                <h2>Comprador</h2>
                <span>Nome: {nome}</span>
                <span>CPF: {formatCpf}</span>
            </div>
            <Link className="botao-home" to={"/"}>
                <button> Voltar para home</button>
            </Link> 
        </section>
    );

}

export default Sucesso;