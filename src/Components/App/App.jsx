import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "../Header/Header";
import Home from "../Home/Home";
import Sessoes from "../Sessao/Sessoes";
import Assentos from "../Assentos/Assentos";
import Sucesso from "../Sucesso/Sucesso";


export default function App(){
    const [sucesso, setSucesso] = useState ({assentos:[],nome:"",cpf:""})
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filme/:idFilme" element={<Sessoes />} />  
                <Route path="/sessao/:idSessao" element={<Assentos setSucesso={setSucesso}/>} /> 
                <Route path="/sucesso" element={<Sucesso sucesso={sucesso}/>} />               
            </Routes>            
        </BrowserRouter>       
    );    
}