import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import Home from "../Home/Home";
import Sessoes from "../Sessao/Sessoes";
import Assentos from "../Assentos/Assentos";

export default function App(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filme/:idFilme" element={<Sessoes />} />  
                <Route path="/sessao/:idSessao" element={<Assentos />} />               
            </Routes>            
        </BrowserRouter>       
    );    
}