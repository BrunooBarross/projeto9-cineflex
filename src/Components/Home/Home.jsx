import Loading from '../Loading/Loading';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import "./style.css"

const Home = () =>{

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
		requisicao.then(resposta => {
			setFilmes(resposta.data);
		});
	}, []);

    if (filmes.length === 0) {
        return (
            <Loading />
        );
    }

    return(
        <>
            <div className="home-titulo">
                <h2>Selecione o filme</h2>
            </div>
            <section className='container-filme'>
                {filmes.map(filme =>  
                    <Link to= {`/filme/${filme.id}`} key={filme.id}>
                        <div className='home-filme' >                    
                            <img className='home-filme-img' src={filme.posterURL} alt={filme.title} />
                        </div>
                    </Link>           
                    
                )}
            </section>        
        </>
    );
}

export default Home;