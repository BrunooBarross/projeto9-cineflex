import axios from 'axios';
import { useState, useEffect } from 'react';
import "./Home.css"
const Home = () =>{

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
		requisicao.then(resposta => {
			setFilmes(resposta.data);
		});
	}, []);

    return(
        <>
            <div className="home-titulo">
                <h2>Selecione o filme</h2>
            </div>
            <section className='container-filme'>
                {filmes.map(filme =>             
                    <div className='home-filme' key={filme.id}>                    
                        <img className='home-filme-img' src={filme.posterURL} alt={filme.title} />
                    </div>
                )}
            </section>        
        </>
    );
}

export default Home;