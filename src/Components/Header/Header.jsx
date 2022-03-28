import "./style.css"
import { useNavigate } from "react-router-dom";

const Header = ({botaoH}) =>{
    const navigate = useNavigate();
    if(botaoH){
        return(
            <header className="header">
                <ion-icon onClick={() => { navigate(-1);}}name="arrow-undo-sharp"></ion-icon>
                <img src="/assets/imagens/logo.png" alt="testes" />
                <h1>ineflex</h1>
            </header>
        );
    }
    return(
        <header className="header">
            <img src="/assets/imagens/logo.png" alt="testes" />
            <h1>ineflex</h1>
        </header>
    );
}

export default Header;