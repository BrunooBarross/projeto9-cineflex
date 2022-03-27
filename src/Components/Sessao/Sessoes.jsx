import SessaoDia from './SessaoDia';
import Footer from '../Footer/Footer';
import Loading from '../Loading/Loading';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import "./Sessoes.css"



const Sessoes = () =>{
    const { idFilme } = useParams();
    const [sessoes, setSessoes] = useState([]);

    useEffect(() => {
		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
		requisicao.then(resposta => {
			setSessoes(resposta.data);
		});
	}, [idFilme]);

    if (sessoes.length === 0) {
        return (
            <Loading />
        );
    }   

    return(
        <>
            <div className="sessoes-titulo">
                <h1>Selecione o horário</h1>
            </div>   
            {
                sessoes.days.map((dia, key) =>
                    <SessaoDia key={key}
                        id={dia.id}
                        weekday={dia.weekday}
                        date={dia.date}
                        showtimes={dia.showtimes}
                    />
                )
            }
           
            <Footer posterURL={sessoes.posterURL} title={sessoes.title} day={null} />
        </>
    );
}

export default Sessoes;