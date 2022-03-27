const Sucesso = (props) => {
    const {assentos, nomeFilme, dataFilme, horaFilme, nome, cpf} = props.sucesso;
    assentos.sort((a, b) => a-b);
    const formatCpf = cpf.substr(0, 3)+'.'+cpf.substr(3, 3)+'.'+cpf.substr(6, 3)+'-'
         +cpf.substr(9, 2);
    return(
        <div>
            {assentos}
            {nomeFilme}
            {dataFilme}
            {horaFilme}
            {nome}
            {formatCpf}
        </div>
    );

}

export default Sucesso;