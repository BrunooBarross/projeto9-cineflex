import Footer from '../Footer/Footer';
import Assento from './Assento';

import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import "./style.css"

const Assentos = ({ setSucesso }) => {
    const { idSessao } = useParams();
    const [assentos, setAssentos] = useState([]);
    const [ids, setIds] = useState({ identificador: [], numeracao: [] });
    const [nomeComprador, setNomeComprador] = useState("");
    const [cpfComprador, setCpfComprador] = useState("");

    const navigate = useNavigate();

    function reservarAssento(event) {
        event.preventDefault(); // impede o redirecionamento

        const requisicaoPost = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", {
            ids: ids.identificador,
            name: nomeComprador,
            cpf: cpfComprador
        });
        requisicaoPost.then(resposta => {
            setSucesso({ assentos: ids.numeracao, nome: nomeComprador, cpf: cpfComprador });
            navigate("/sucesso");
        });
        requisicaoPost.catch(resposta => { console.log("deu ruim"); });
    }

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        requisicao.then(resposta => {
            setAssentos(resposta.data);
        });
    }, [idSessao]);

    if (assentos.length === 0) {
        return (
            <div>
                <h1>Selecione o(s) assento(s)</h1>
            </div>
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
                        onChange={e => setNomeComprador(e.target.value)} />
                    <span>CPF do Comprador:</span>
                    <input maxLength='14' minLength='11' name="" placeholder='Digite seu cpf'
                        onChange={e => setCpfComprador(e.target.value)} />
                </div>
                <button type="submit" className='botao'>Reservar assento(s)</button>
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