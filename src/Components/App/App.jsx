import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "../Header/Header";
import Home from "../Home/Home";
import Sessoes from "../Sessao/Sessoes";
import Assentos from "../Assentos/Assentos";
import Sucesso from "../Sucesso/Sucesso";


export default function App(){
    const [botaoH, setBotaoH] = useState (false);
    const [sucesso, setSucesso] = useState ({})
    return(
        <BrowserRouter>
            <Header botaoH={botaoH}/>
            <Routes>
                <Route path="/" element={<Home botaoH={botaoH} setBotaoH={setBotaoH}/>} />
                <Route path="/filme/:idFilme" element={<Sessoes setBotaoH={setBotaoH}/>} />  
                <Route path="/sessao/:idSessao" element={<Assentos setSucesso={setSucesso} setBotaoH={setBotaoH}/>} /> 
                <Route path="/sucesso" element={<Sucesso sucesso={sucesso} setBotaoH={setBotaoH}/>} />               
            </Routes>            
        </BrowserRouter>       
    );    
}