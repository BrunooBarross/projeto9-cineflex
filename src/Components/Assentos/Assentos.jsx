import Footer from '../Footer/Footer';
import Assento from './Assento';

import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import "./style.css"

const Assentos = () =>{
    const {idSessao} = useParams();
    const [assentos, setAssentos] = useState([]);

    useEffect(()=>{
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        requisicao.then(resposta => {
            setAssentos(resposta.data);
        });
    },[idSessao]);

    if (assentos.length === 0) {
        return(
            <div>
                <h1>Selecione o(s) assento(s)</h1>
            </div>
        );        
    }
    
    return(
        <div className='pagina-assentos'>
            <div className="assentos-titulo">
                <h1>Selecione o(s) assento(s)</h1>
            </div>
            <section className="assentos-container">
                {assentos.seats.map((assento,key) =>
                    <Assento  
                            key={key}
                            id={assento.id}
                            disponivel={assento.isAvailable} 
                            posicao = {assento.name}
                    />
                )}
            </section>
            <section className='legenda'>
                <div>
                    <div className='legenda-selecionado'></div> 
                    <p>Selecionado</p>
                </div>   
                <div>
                    <div className='legenda-livre'></div> 
                    <p>Disponível</p>
                </div>   
                <div>
                    <div className='legenda-reservado'></div> 
                    <p>Reservado</p>
                </div>               
            </section>
            <div className='input'>
                <span>Nome do comprador:</span>
                <input type="text" name="" placeholder='Digite seu nome' />
                <span>CPF do comprador:</span>
                <input type="text" name="" placeholder='Digite seu nome' />
            </div>
            <button className='botao'>Reservar assento(s)</button>
            <Footer
                posterURL={assentos.movie.posterURL}
                title={assentos.movie.title}
                day={assentos.day.weekday}
                time={assentos.name}
            />
        </div>
    );
}
export default Assentos;