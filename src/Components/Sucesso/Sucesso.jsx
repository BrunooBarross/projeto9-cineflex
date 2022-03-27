const Sucesso = (props) => {
    const {assentos, nomeFilme, dataFilme, horaFilme, nome, cpf} = props.sucesso;
    assentos.sort((a, b) => a-b);
    return(
        <div>
            {assentos}
            {nomeFilme}
            {dataFilme}
            {horaFilme}
            {nome}
            {cpf}
        </div>
    );

}

export default Sucesso;