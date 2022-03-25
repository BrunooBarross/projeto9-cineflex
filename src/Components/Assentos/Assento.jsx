import { useState } from "react";

export default function Assento(props){

    let [cor, setCor] = useState('livre');
    let [ids, setIds] = useState(['teste','teste']);

    function tratarEscolha(disponivel, id){ 
        if(!disponivel){
            alert('Esse assento não está disponível')
            return console.log('não disponível')
        }  

        if(cor === 'selecionado'){
            alert('Você desfez a seleção')
            setCor('livre');
            return console.log('desfez seleçao');
        }

        setCor('selecionado');
        const novosIds = [...ids, id];
        setIds([...novosIds]);
    }

    console.log(ids);
    
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
            onClick={()=>tratarEscolha(props.disponivel, props.id)}>
            {props.posicao}
        </div>
    );                              
            
}