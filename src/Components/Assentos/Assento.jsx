import { useState } from "react";

export default function Assento(props) {

    let [cor, setCor] = useState('livre');

    function tratarEscolha(disponivel, id, posicao) {
        if (!disponivel) {
            return alert('O assento '+posicao+" não esta disponível")
        }

        if (cor === 'selecionado') {
            let dialog = window.confirm("Desfazer a seleção do assento: " + posicao+ "?");
            if (dialog) {
                setCor('livre');
                const novosIds = props.ids.identificador.filter(item => item !== id);
                const numeracaoAssentos = props.ids.numeracao.filter(item => item !== posicao);
                props.setIds({ identificador: [...novosIds], numeracao: [...numeracaoAssentos] });
            }
            return "";
        }

        setCor('selecionado');
        const novosIds = [...props.ids.identificador, id];
        const numeracaoAssentos = [...props.ids.numeracao, posicao]
        props.setIds({ identificador: [...novosIds], numeracao: [...numeracaoAssentos] });

    }

    if (!props.disponivel) {
        return (
            <div className="assentos reservado"
                onClick={() => tratarEscolha(props.disponivel,'',props.posicao)}>
                {props.posicao}
            </div>
        );
    }

    return (
        <div className={"assentos " + cor}
            onClick={() => tratarEscolha(props.disponivel, props.id, props.posicao)}>
            {props.posicao}
        </div>
    );

}