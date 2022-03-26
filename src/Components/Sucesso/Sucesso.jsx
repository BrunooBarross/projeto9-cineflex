const Sucesso = (props) => {
    const {assentos, nome, cpf} = props.sucesso;
    return(
        <div>
            {assentos}
            {nome}
            {cpf}
        </div>
    );

}

export default Sucesso;