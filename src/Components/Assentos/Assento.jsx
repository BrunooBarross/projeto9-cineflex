import { useState } from "react";

export default function Assento(props){

    let [cor, setCor] = useState('livre');   

    function tratarEscolha(disponivel, id, posicao){ 
        if(!disponivel){
            return alert('Esse assento não está disponível')
        }  

        if(cor === 'selecionado'){ 
            let dialog = window.confirm("Desfazer a seleção do assento: " + posicao);
            if(dialog){
                setCor('livre');
                const novosIds = props.ids.filter(item => item !== id);
                props.setIds([...novosIds]);
            }      
            return console.log(dialog)
        }

        setCor('selecionado');
        const novosIds = [...props.ids, id];
        props.setIds([...novosIds]);
    }

    if (!props.disponivel) {
        return(
            <div className="assentos reservado" 
                onClick={()=>tratarEscolha(props.disponivel)}>
                {props.posicao}
            </div>
        );                             
    } 
    
    return(
        <div className={"assentos " + cor}
            onClick={()=>tratarEscolha(props.disponivel, props.id, props.posicao)}>
            {props.posicao}
        </div>
    );                              
            
}