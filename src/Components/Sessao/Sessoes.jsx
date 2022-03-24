import SessaoDia from './SessaoDia';

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
			setSessoes(resposta.data.days);
		});
	}, []);

    return(
        <>
            <div className="sessoes-titulo">
                <h1>Selecione o horário</h1>
            </div>   
            {
                sessoes.map((dia, key) =>
                    <SessaoDia key={key}
                        id={dia.id}
                        weekday={dia.weekday}
                        date={dia.date}
                        showtimes={dia.showtimes}
                    />
                )
            }
        </>
    );
}

export default Sessoes;