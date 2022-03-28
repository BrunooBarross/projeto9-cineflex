import Footer from '../Footer/Footer';
import Assento from './Assento';
import Loading from '../Loading/Loading';

import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import "./style.css"

const Assentos = ({ setSucesso, setBotaoH }) => {
    
    useEffect(_=>{
        setBotaoH(true);
    }, [setBotaoH]);

    const { idSessao } = useParams();
    const [assentos, setAssentos] = useState([]);
    const [ids, setIds] = useState({ identificador: [], numeracao: [] });
    const [nomeComprador, setNomeComprador] = useState("");
    const [cpfComprador, setCpfComprador] = useState("");

    const navigate = useNavigate();
    
    function reservarAssento(event) {
        event.preventDefault(); // impede o redirecionamento
        if (ids.identificador.length === 0){
            alert('Prezado cliente escolha pelo menos um assento >.<');
        }
        if (ids.identificador.length !== 0) {
            const requisicaoPost = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", {
            ids: ids.identificador,
            name: nomeComprador,
            cpf: cpfComprador
        });
        requisicaoPost.then(resposta => {
            setSucesso({ 
                assentos: ids.numeracao, 
                nomeFilme: assentos.movie.title, 
                dataFilme: assentos.day.date,
                horaFilme: assentos.name, 
                nome: nomeComprador, 
                cpf: cpfComprador });
            navigate("/sucesso");
        });
        requisicaoPost.catch(resposta => { console.log('Deu erro ai Dev, se vira irmão!')});
            
        }
    }

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        requisicao.then(resposta => {
            setAssentos(resposta.data);
        });
    }, [idSessao]);
    

    if (assentos.length === 0) {
        return (
            <Loading />
        );
    }

    return (
        <div className='pagina-assentos'>
            <div className="assentos-titulo">
                <h1>Selecione o(s) assento(s)</h1>
            </div>
            <section className="assentos-container">
                {assentos.seats.map((assento, key) =>
                    <Assento
                        key={key}
                        id={assento.id}
                        disponivel={assento.isAvailable}
                        posicao={assento.name}
                        ids={ids}
                        setIds={setIds}
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
            <form onSubmit={reservarAssento}>
                <div className='input'>
                    <span>Nome do Comprador:</span>
                    <input type="text" name="name" placeholder='Digite seu nome'
                        onChange={e => setNomeComprador(e.target.value)} required/>
                    <span>CPF do Comprador:</span>
                    <input maxLength={11} pattern='[0-9]{11}' name="" placeholder='Digite seu cpf'
                        onChange={e => setCpfComprador(e.target.value)} required/>
                </div>
                <div className='botao-div'>
                    <button type="submit" className='botao'>Reservar assento(s)</button>
                </div>                
            </form>

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